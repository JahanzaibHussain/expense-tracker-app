import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


function ExpenseInfo() {

    const {transactions, convert} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.expense);
    const totalExpensesAmt = amounts.reduce((acc,item) => (acc+=item),0);
    
    const totalData = transactions.length;
    const lastRow = transactions.filter( transaction => transaction.id !== totalData-1)
    const incomeAmt = lastRow[0].income;
    const remainAmt = lastRow[0].remain;

    // const income = amount
    // .filter(item => item>0)
    // .reduce( (acc,item)=> (acc+=item),0 )
    // .toFixed(2)

    // const expense = amount
    // .filter(item => item < 0)
    // .reduce( (acc,item)=> (acc+=item),0 )
    // .toFixed(2)

    return (
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card border-primary mb-3" >
                    <div className="card-header">Your Income </div>
                    <div className="card-body">
                        <h4 className="card-title float-left mt-2">{convert(incomeAmt)}</h4>
                        <span className="float-right">
                            <h1><i className="fas fa-wallet"></i></h1>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card border-primary mb-3" >
                    <div className="card-header">Your Current Balance</div>
                    <div className="card-body">
                        <h4 className="card-title float-left mt-2">{convert(remainAmt)}</h4>
                        <span className="float-right ">
                            <h1><i className="fas fa-hand-holding-usd"></i></h1>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card border-primary mb-3" >
                    <div className="card-header">Your Total Expense</div>
                    <div className="card-body">
                        <h4 className="card-title float-left mt-2">{convert(totalExpensesAmt)}</h4>
                        <span className="float-right ">
                            <h1><i className="fas fa-cart-arrow-down"></i></h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default ExpenseInfo
