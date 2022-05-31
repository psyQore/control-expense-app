import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatQuantity } from "../helpers";

const BudgetControl = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  setIsValidBudget,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.quantity + total,
      0
    );
    const totalAvailable = budget - totalSpent;

    // Calcular porcentaje gastado
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);

    setSpent(totalSpent);
    setAvailable(totalAvailable);
  }, [expenses]);

  const handleResetApp = () => {
    const result = confirm("¿ Deseas reiniciar el presupuesto y gastos ?");

    if (result) {
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar
        styles={buildStyles({
          pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          trailColor: "#F5F5F5",
          textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
        })}
        value={percentage}
        text={`${percentage}% Gastado`}
      />
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear
        </button>
        <p>
          <span>Presupuesto:</span> {formatQuantity(budget)}
        </p>
        <p className={`${available < 0 ? "negativo" : ""}`}>
          <span>Disponible:</span> {formatQuantity(available)}
        </p>
        <p>
          <span>Gastado:</span> {formatQuantity(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
