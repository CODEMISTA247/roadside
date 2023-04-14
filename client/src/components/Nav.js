import axios from 'axios';
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import logo from '../components/images/images.jpg'
import image from '../components/images/images.png'

const Nav = (props) => {
    const navigate = useNavigate()

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then((res) => {
                console.log(res);
                window.localStorage.removeItem('uuid')
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return(
        <div className='d-flex justify-content-evenly align-items-center bg-secondary'>
            <h1 className='text-bg-danger rounded-3 text-light'>CMS.corp </h1>
            <img style={{width:'50px', borderRadius:'30px'}} src={logo} alt="This Logo"/>
            <img style={{width:'50px', borderRadius:'30px'}} src={image} alt="This Logo"/>

            
            <Link to={'/dashboard'}  className='btn btn-grey'>Go Home</Link>
            <button className='ms-5' onClick={logout}>Logout</button>
            <Link to={'/customerForm'}  className='btn btn-lightgrey'> Get Roadside Assistance</Link>
        </div>
    )
}


export default Nav; 