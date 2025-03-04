import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault()

        axios.post("https:localhost:5000/register", { username, password }).then(result => console.log(result)).catch(error => console.log(error));


    }
    return (
        <div>
            <form onSubmit={handleRegister}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label" >Username</label>
                    <input type="email" value={username} onChange={e => setUsername(e.target.value)} className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="inputPassword4" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Register