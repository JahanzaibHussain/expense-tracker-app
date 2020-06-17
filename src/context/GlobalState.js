import React, { createContext, useReducer } from 'react' 
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {id: 1, text:"Salary", amount:50000, expense : 0, remain: 50000, income: 50000},
        // {id: 2, text:"clower", amount:12000, expense : 0, remain: 0},
        // {id: 3, text:"dlower", amount:22000, expense : 0, remain: 0}
    ]
}


export const GlobalContext = createContext(initialState);

//Provider

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload : id
        })
    }
    
    function addTransaction(transaction){
        //console.log(transaction)
        dispatch({
            type: "ADD_TRANSACTION",
            payload : transaction
        })
    }

    const convert = ( val ) => {
        return "Rs " + (val).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    return ( <GlobalContext.Provider value={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction,
        convert
    }}>
        {children}
    </GlobalContext.Provider> )

}

// import React, { createContext, useReducer } from 'react'
// import AppReducer from './AppReducer'

// const initialState = {
//     transactions : []
// }

// //Create Context
// export const GlobalContext = createContext(initialState);


// //Provider
// export const GlobalProvider = ({children}) => {
 
//     const [state, dispatch] = useReducer(AppReducer, initialState)
 
//     const convert = amt => amt.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

//     function deleteTransaction(id){
//         dispatch({
//             type: "DELETE_TRANSACTION",
//             payload: id
//         })
//     }
//     function addTransaction(transaction){
//         dispatch({
//             type: "ADD_TRANSACTION",
//             payload: transaction
//         })
// //     }

//     return(<GlobalContext.Provider value={
//         {
//             transactions: state.transactions,
//             deleteTransaction : deleteTransaction,
//             addTransaction : addTransaction,
//             convert
//         }
//         }> 
//         {children} </GlobalContext.Provider> )
// }