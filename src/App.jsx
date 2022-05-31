import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListExpenses from "./components/ListExpenses";
import Filters from "./components/Filters";
import Modal from "./components/Modal";
import { generateId } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );

  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);

  const [editExpense, setEditExpense] = useState({});

  const [filter, setFilter] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimationModal(true);
      }, 500);
    }
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    if (filter) {
      // Filtrar gastos
      const filteredExpenses = expenses.filter(
        (expense) => expense.category === filter
      );
      setFilteredExpenses(filteredExpenses);
    }
  }, [filter]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;

    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  const handleNewExpense = () => {
    setModal(true);
    setEditExpense({});
    setTimeout(() => {
      setAnimationModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    if (expense.id) {
      const updateExpenses = expenses.map((expenseState) =>
        expenseState.id === expense.id ? expense : expenseState
      );
      setExpenses(updateExpenses);
      setEditExpense({});
    } else {
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }
    setAnimationModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminateExpense = (id) => {
    const updateExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updateExpenses);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <ListExpenses
              expenses={expenses}
              setEditExpense={setEditExpense}
              eliminateExpense={eliminateExpense}
              filter={filter}
              filteredExpenses={filteredExpenses}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewBudget}
              alt="Icon New Budget"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animationModal={animationModal}
          setAnimationModal={setAnimationModal}
          saveExpense={saveExpense}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      )}
    </div>
  );
}

export default App;
