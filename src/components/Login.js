import React, {useState} from 'react'
import auth from '../auth'

function Login(props) {

    const [errors, setErrors] = useState([])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        if( username === "admin" &&  password === "admin"  )
            auth.login( ()=> props.history.push('/') ) 
        else if( username == '' &&  password == ''  )
            setErrors(["Sorry, this fields in required."]);
        else 
            setErrors(["Invalid username or password please try again with valid username and password."]);
        
    }

    return (
        <div className="container h-100">

            <div className="row h-100 justify-content-center align-items-center">
                
                <div className="col-lg-8 col-md-8 col-sm-12">
                {   errors.length ? (
                    <div className="alert alert-dismissible alert-danger">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Error!</strong> {errors}
                    </div>
                 ) : ""}

                    <div className="">
                        <h1 className="text-primary">React Project One</h1>
                        <p className="">
                            I made this project for practice purpose with react hooks like useState, useContext, useReducer and react-router-dom pakage.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <h4 className="mt-3 text-primary text-center">Login</h4>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <input autoFocus placeholder="Type 'admin' as username" value={username} onChange={e => setUsername(e.target.value)} type="text" className={`form-control  ${errors.length ? "is-invalid" : ""}`} />
                        </div>
                        <div className="form-group">
                            <input placeholder="Type 'admin' as password" value={password} onChange={e => setPassword(e.target.value)} type="password" className={`form-control  ${errors.length ? "is-invalid" : ""}`}  />
                        </div>
                            <button type="submit" className="btn-block btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login
