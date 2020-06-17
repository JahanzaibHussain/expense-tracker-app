import React from 'react'
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'

function ExpenseSummry() {
    return (
        <div className="row">
            <ExpenseList />
            <AddExpense />
        </div>
    )
}

export default ExpenseSummry
