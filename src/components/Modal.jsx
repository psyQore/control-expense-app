import { useState, useEffect } from "react";
import Message from "./Message";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animationModal,
  setAnimationModal,
  saveExpense,
  editExpense,
}) => {
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setQuantity(editExpense.quantity);
      setCategory(editExpense.category);
    }
  }, []);

  const hideModal = () => {
    setAnimationModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validando formulario
    if ([name, quantity, category].includes("")) {
      setMessage("Todos los campos son obligatorios");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    saveExpense({ name, quantity, category });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Cerrar Modal" onClick={hideModal} />
      </div>

      <form
        className={`formulario ${animationModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>
        {message && <Message type="error">{message}</Message>}
        <div className="campo">
          <label htmlFor="name">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="quantity">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad gasto: ej. 300"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida-</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
