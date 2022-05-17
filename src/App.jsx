import { useState } from "react";
import Header from "./components/Header";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
  };

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

      {modal && <p>Desde Modal</p>}
    </div>
  );
}

export default App;
