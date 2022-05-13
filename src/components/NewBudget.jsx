import React from "react";

const NewBudget = ({ budget, setBudget }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu Presupuesto"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NewBudget;
