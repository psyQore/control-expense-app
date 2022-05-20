import React from 'react'

const Expense = ({ expense}) => {

    const { name, quantity, category, id } = expense;

  return (
    <div className='gasto sombra'>
       <div className='contenedor-gasto'>
           <div className='descripcion-gasto'>
               <p className='categoria'>
                   {expense.category}
               </p>
               <p className='nombre-gasto'>{name}</p>
           </div>
       </div>
    </div>
  )
} 

export default Expense