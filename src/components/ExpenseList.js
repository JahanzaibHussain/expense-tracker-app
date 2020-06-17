import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

function ExpenseList() {

    const {transactions} = useContext(GlobalContext)

    return (
        <div className="col-lg-8 col-md-8 col-sm-12">
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th scope="col">Reason</th>
                        <th scope="col">Opening Amount</th>
                        <th scope="col">Expense Amount</th>
                        <th scope="col">Remain Amount</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (transactions.length) ?
                        transactions.map( (transaction, index) =>  <Transaction key={transaction.id} index={index} dataLength={transactions.length} transaction={transaction}  /> )
                        :
                        <>
                            <tr>
                                <td> - </td>
                                <td> - </td>
                                <td> - </td>
                                <td> - </td>
                            </tr>
                        </>
                    }
                </tbody>
            </table>
        </div>
)
}

export default ExpenseList
