import React from 'react'
import {Link} from 'react-router-dom'
import auth from '../auth'

function Navbar({props}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> <i className="fas fa-search-dollar"></i> Expense Tracker</Link >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link >
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reference">References</Link >
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Admin
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions" wfd-invisible="true">
                                {/* <Link className="dropdown-item" to="/login"> Logout </Link> */}
                                <button className="dropdown-item" onClick={()=>{
                                    auth.logout( ()=>{
                                        props.history.push('/login');
                                    })
                                }} >Logout</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
