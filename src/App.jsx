import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { generateId } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimationModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    expense.id = generateId();
    setExpenses([...expenses, expense]);

    setAnimationModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="nuevo-gasto">
          <img
            src={IconNewBudget}
            alt="Icon New Budget"
            onClick={handleNewExpense}
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animationModal={animationModal}
          setAnimationModal={setAnimationModal}
          saveExpense={saveExpense}
        />
      )}
    </div>
  );
}

export default App;
