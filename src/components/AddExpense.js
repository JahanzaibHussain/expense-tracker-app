import React , { useState, useContext} from 'react'
import moduleName, { GlobalContext } from '../context/GlobalState'

function AddExpense() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [income, setIncome] = useState(false)
    const [expenses, setExpenses] = useState(false)

    const { transactions, addTransaction} = useContext(GlobalContext);

    // const amounts = transactions.map( transaction => transaction.amount)
    // const total = amounts.reduce((acc,item) => (acc+=item),0).toFixed(2);
    

    const totalData = transactions.length;
    
    const lastRow = transactions.filter( transaction => transaction.id !== totalData-1)
    const total = lastRow[0].amount;
    let incomeAmt = lastRow[0].income;

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        var balance = 0;
        var expenseAmt = 0;
        var remainAmt = 0;

        if( income ){

            balance = (+(total) + +(amount))
            remainAmt = balance
            incomeAmt = +(incomeAmt) + +(amount);

        }

        if( expenses ){
            balance = (+(total) - +(amount))
            expenseAmt = (+amount)
            remainAmt = balance
        }


        const transaction = {
            id : transactions.length + 1,
            text,
            amount: balance,
            income:  incomeAmt,
            expense: expenseAmt , //+amount
            remain: remainAmt, //expenseAmt
        }


        console.log( transaction )
        addTransaction(transaction)
        
        setExpenses(false);
        setIncome(false);
        setText('');
        setAmount(0)
        return;

        if( income ){
            remainAmt = (+total) + (+amount)
        }
        if( expenses ){
            expenseAmt = (+amount)
            remainAmt = (+total) - (+amount)
        }

        // const transaction = {
        //     id : transactions.length + 1,
        //     text,
        //     amount: (+total) + (+amount),
        //     expense: expenseAmt , //+amount
        //     remain: remainAmt, //expenseAmt
        // }

        // console.log(transaction)
        // addTransaction(transaction)

        // console.log("expenseAmt" + expenseAmt)
        // console.log("remainAmt" + remainAmt)


        
        
        setExpenses(false);
        setIncome(false);

    }

    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <h4 className="mt-3">Add Income/Expense</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input autoFocus placeholder="Enter expense reason here..." value={text} onChange={ (e) => setText(e.target.value) } type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <input placeholder="Enter expense amount here..." value={amount} onChange={ (e) => setAmount(e.target.value) } type="number" className="form-control" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button type="submit" onClick={ ()=> setIncome(true) } className="btn-block btn btn-primary"> <i className="fas fa-plus"></i>  Income </button>
                    </div>
                    <div className="col-md-6">
                        <button type="submit" onClick={ ()=> setExpenses(true) } className="btn-block btn btn-secondary"> <i className="fas fa-angle-double-down"></i> Expense </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
