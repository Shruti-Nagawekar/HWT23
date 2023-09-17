import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form>
                <label for="email">Email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label for="password">Password</label>
                <input type="password" placeholder="********" id="password" name="email" />
                <button type="submit">Login In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}