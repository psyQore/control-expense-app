import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({
  budget,
  setExpenses,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  expenses,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidBudget ? (
        <BudgetControl
          budget={budget}
          expenses={expenses}
          setExpenses={setExpenses}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
