import React, { useState, useEffect } from 'react'
import "../../Css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginInitiate } from '../../Redux/actions/productsActions';
import { logoutInitiate } from '../../Redux/actions/productsActions';
import EditEvent from '../CreateEvents/EditEvent';

const Login = (props) => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const { email, password } = state;
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate('/women');
        }
        else {
            navigate('/login')
        }
    }, [currentUser, navigate]);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({ email: "", password: "" });
        navigate('/create-event');
        dispatch(logoutInitiate());
        navigate('/');
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    return (
        <div className='container'>
            <div id="logreg-forms">
                <form className='form-signin' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: "center", color: "white" }}>
                        Sign in to your account.
                    </h1>
                    <p className='text-center lead'>Don't have an account?
                        <Link to="/register" className='text-link'><span aria-hidden="true">SIGN UP »</span></Link>
                    </p>
                    <input
                        type="email"
                        id="inputEmail"
                        className='form-control'
                        placeholder='Email Address'
                        name='email'
                        onChange={handleChange}
                        value={email}
                        required
                    /> <br />
                    <input
                        type="password"
                        id="inputPassword"
                        className='form-control'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <div className='text-center'>
                        <button className='btn btn-block signinb' type='submit'>
                            <i className=''></i> Sign In</button>
                    </div>
                    <hr />
                   <p class="text-center1 lead1">Having trouble signing in? 
                   <Link to="#"><span className='forgotPwd'>Forgot Password ?</span></Link></p>
                    
                </form>
            </div>
            <EditEvent/>
        </div>
    )
}

export default Login