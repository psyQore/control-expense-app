import { formatDate } from "../helpers";

const Expense = ({ expense }) => {
  const { name, quantity, category, id, date } = expense;

  return (
    <div className="gasto sombra">
      <div className="contenedor-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{expense.category}</p>
          <p className="nombre-gasto">{name}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${quantity}</p>
    </div>
  );
};

export default Expense;
