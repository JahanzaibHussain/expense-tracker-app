import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction( {transaction, dataLength} ) {

    const {deleteTransaction, convert} = useContext(GlobalContext)

    return (
        <>
            <tr>
                <td>{transaction.text}</td>
                <td> {convert(transaction.amount)} <span> &nbsp; &nbsp; <i className="fas fa-sort-amount-up"></i></span></td>
                <td> {convert(transaction.expense)} <span> &nbsp; &nbsp; <i className="fas fa-angle-double-down"></i></span></td>
                <td> {convert(transaction.remain)} <span> &nbsp; &nbsp; <i className="fas fa-money-bill"></i></span></td>
                {
                    ( transaction.id !== 1 ) ? (
                        <td><button onClick={() => deleteTransaction(transaction.id)} className="btn btn-danger"> Remove</button></td>
                    ) : (
                        <td><button disabled onClick={() => deleteTransaction(transaction.id)} className="btn btn-danger"> Remove</button></td>
                    )
                }
            </tr>
        </>
    )
}

export default Transaction
