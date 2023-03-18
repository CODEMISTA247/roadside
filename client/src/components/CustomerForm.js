import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const CustomerForm = (props) => {
    const navigate = useNavigate()
    const {allCustomers, setAllCustomers} = props 
    const [errors, setErrors] = useState({})

    const [customer, setCustomer] = useState({
        customerName: '',
        location: '' , 
        description: '', 
        typeService: 'Jumpstart',
        phoneNumber: 0,
    }) 


    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postCustomer', customer)
            .then((res) => {
                setAllCustomers([...allCustomers, res.data])
                navigate('/')
                
            })
            .catch((err) => {
                console.log(err);
                // console.log(err.response.data.error.errors);
                setErrors(err.response.data.errors);
            })
    }


    return (
        <div className='d-flex justify-content-evenly'>
        
        <h1 className='text-dark'>Need Roadside Assistance?</h1>

        <form className='w-15 text-dark row g-2' onSubmit={submitHandler}>
            <label className='form-label'>Name:</label>
            <input className='form-control' type='text' value={customer.customerName} name='customerName' onChange={handleChange}/>

            {
                errors.customerName?
                <p className='text-warning'>{errors.customerName.message}</p>:
                null
            }

            <label className='form-label'>Location:</label>
            <input className='form-control' type='text' value={customer.location} name='location' onChange={handleChange}/>

            {
                errors.location?
                <p className='text-warning'>{errors.location.message}</p>:
                null
            }

            <label className='form-label'>What's going on?</label>
            <input className='form-control' type='text' value={customer.description} name='description' onChange={handleChange}/>

            {
                errors.description?
                <p className='text-warning'>{errors.description.message}</p>:
                null
            }

            <label className='form-label'>Type of Service:</label>
            <select className="form-select" name="typeService" onChange={handleChange} value={customer.typeService}>
                <option value="Jumpstart">Jumpstart</option>
                <option value="Vehicle lockout">Vehicle lockout</option>
                <option value="Flat Tire">Flat Tire</option>
                <option value="Battery Replacement">Battery Replacement</option>
                <option value="oil change">Oil Change</option>
                <option value="Tire Rotation">Tire Rotation</option>
                <option value="Breaks/Rotors">Breaks/Rotors</option>
            </select>

            {
                errors.typeService?
                <p className='text-warning'>{errors.typeService.message}</p>:
                null
            }
            <label className='form-label'>Phone Number:</label>
            <input className='form-control' type='number' value={customer.phoneNumber} name='phoneNumber' onChange={handleChange}/>

            {
                errors.phoneNumber?
                <p className='text-warning'>{errors.phoneNumber.message}</p>:
                null
            }
            <br/>
            <div>
                <button className='btn btn-primary'>Submit</button> 
                --
                <Link to={'/'}>Go Home</Link>
            </div>
        
        </form> 
        </div>
    )
}

export default CustomerForm;

