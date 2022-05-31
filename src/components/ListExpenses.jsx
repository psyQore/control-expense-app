import Expense from "./Expense";

const ListExpenses = ({
  expenses,
  setEditExpense,
  eliminateExpense,
  filter,
  filteredExpenses,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>{filteredExpenses.length ? "Gastos" : "No hay gastos en esta categoria"}</h2>
          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpense={setEditExpense}
              eliminateExpense={eliminateExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Gastos" : "No hay gastos aún"}</h2>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpense={setEditExpense}
              eliminateExpense={eliminateExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListExpenses;
