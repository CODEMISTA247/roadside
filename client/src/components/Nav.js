import axios from 'axios';
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import logo from '../components/images/images.jpg'
import image from '../components/images/images.png'
import home from '../components/images/home.png'
import log from '../components/images/Log.png'
import './buttons.css'

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
        <div className='d-flex justify-content-evenly align-items-center bg-dark text-white '>
            <h1 className='text-bg-secondary rounded-3 text-light m-3'>CMS.corp </h1>

            
            
                <Link to="/dashboard" className='buttons btn'>
                <img style={{width:'30px', borderRadius:'30px'}} src={home} alt="This Logo"/>
                </Link>
                {/* <Link to={'/dashboard'}  className='btn btn-grey'>Go Home</Link> */}
                <Link to={'/customerForm'} className='buttons btn btn-secondary btn-outline-dark' >
                Get <img style={{width:'30px', borderRadius:'30px'}} src={image} alt="This Logo"/> Roadside Assistance</Link>
                <button  onClick={logout}>
                <img style={{width:'30px', borderRadius:'0px'}} src={log} alt="This Logo"/>
                </button>

            

        </div>
    )
}


export default Nav; 