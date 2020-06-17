import React from 'react';
import Header from './Header';
import ExpenseInfo from './ExpenseInfo';
import Navbar from './Navbar';
import ExpenseSummry from './ExpenseSummry';
import { GlobalProvider } from '../context/GlobalState';

function Home(props) {
    return (
        <>
           <GlobalProvider>
                <Navbar props={props} />
                <div className="container-fluid">
                <Header />
                <ExpenseInfo />
                <ExpenseSummry />
                </div>
            </GlobalProvider>
        </>
    )
}

export default Home
