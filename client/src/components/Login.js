import './loginRegForm.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'
import React, {useState} from 'react';

const Login = (props) => {
    const path = useLocation().pathname;
    const location = path.split('/')[1]
    console.log(location);

    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''

    })
    const onChangeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res);
                window.localStorage.setItem('uuid', res.data.user._id)
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='bg-img'>
            <h1 className='text-white title'>Welcome Back!</h1> 
            <form onSubmit={submitHandler} className='col-4 mx-auto user-form mt-5'>
                <label className='form-label'>Email:</label>
                <input type="text" name="email" className='form-control' onChange={onChangeHandler} value={userLogin.email}/>

                <label className='form-label'>Password:</label>
                <input type="text" name="password" className='form-control' onChange={onChangeHandler} value={userLogin.password}/>

                <button className='btn btn-secondary btn-outline-dark text-dark'>Login</button>
                <br/>
                <Link className='text-white btn btn-dark btn-outline-dark' to={'/'}>Dont have an account? Sign up here</Link>


            </form> 
        </div>
    )
}

export default Login; 
