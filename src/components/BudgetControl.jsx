const BudgetControl = ({ budget }) => {
  const formatQuantity = (quantity) => {
    return quantity.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>Grafica Aqui</div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatQuantity(budget)}
        </p>
        <p>
          <span>Disponible:</span> {formatQuantity(0)}
        </p>
        <p>
          <span>Gastado:</span> {formatQuantity(0)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
