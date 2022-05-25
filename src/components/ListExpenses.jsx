import Expense from "./Expense";

const ListExpenses = ({ expenses, setEditExpense, eliminateExpense }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Gastos" : "No Hay Gastos Aún"}</h2>

      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          setEditExpense={setEditExpense}
          eliminateExpense={eliminateExpense}
        />
      ))}
    </div>
  );
};

export default ListExpenses;
