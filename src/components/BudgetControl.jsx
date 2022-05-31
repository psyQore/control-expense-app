import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { formatQuantity } from "../helpers";
const BudgetControl = ({ budget, expenses }) => {
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

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: "#3B82F6",
          trailColor: "#F5F5F5",
        })}
      />
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatQuantity(budget)}
        </p>
        <p>
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
