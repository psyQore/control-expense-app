import { formatDate } from "../helpers";

import iconoAhorro from "../img/icono_ahorro.svg";
import iconoCasa from "../img/icono_casa.svg";
import iconoComida from "../img/icono_comida.svg";
import iconoGastos from "../img/icono_gastos.svg";
import iconoOcio from "../img/icono_ocio.svg";
import iconoSalud from "../img/icono_salud.svg";
import iconoSuscripciones from "../img/icono_suscripciones.svg";

/* Diccionario de iconos */
const dictionaryIconos = {
  ahorro: iconoAhorro,
  comida: iconoComida,
  casa: iconoCasa,
  gastos: iconoGastos,
  ocio: iconoOcio,
  salud: iconoSalud,
  suscripciones: iconoSuscripciones,
};

const Expense = ({ expense }) => {
  const { name, quantity, category, id, date } = expense;

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={dictionaryIconos[category]} alt="Icono" />
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
