import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListExpenses from "./components/ListExpenses";
import Modal from "./components/Modal";
import { generateId } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);

  const [editExpense, setEditExpense] = useState({});

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimationModal(true);
      }, 500);
    }
  }, [editExpense]);

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
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <ListExpenses
              expenses={expenses}
              setEditExpense={setEditExpense}
              eliminateExpense={eliminateExpense}
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
        />
      )}
    </div>
  );
}

export default App;
