import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import logo from '../components/images/logo.png'

const CustomerForm = (props) => {
    const navigate = useNavigate()
    const {allCustomers, setAllCustomers} = props 
    const [errors, setErrors] = useState({})

    const [customer, setCustomer] = useState({
        customerName: '',
        location: '' , 
        description: '', 
        typeService: 'Jumpstart',
        phoneNumber: 18000000000,
        completed: false
    }) 


    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setCustomer({...customer, [e.target.name]: e.target.value})
/*         if(e.target.name === 'completed'){
            console.log('HERE');
            setCustomer({...customer, completed: !customer.completed})
        }else{
            setCustomer({...customer, [e.target.name]: e.target.value})
        } */
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postCustomer', customer)
            .then((res) => {
                setAllCustomers([...allCustomers, res.data])
                navigate('/dashboard')
                
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
                // console.log(err.response.data.error.errors);
                
            })
    }


    return (
        <div className='bg-img d-block justify-content-evenly'>

        
        <h2 className='text-light text-bg-dark w-50  p-0 '>Need Roadside Assistance? <img style={{width:'80px', borderRadius:'30px'}} src={logo} alt="This Logo"/> </h2>

        <form className=' border-5 m-auto w-50 row g-2 text-light rounded-3 user-form' onSubmit={submitHandler}>
            <label className='form-label form-label b text-bg-dark text-light w-50 rounded-3'>Name:</label>
            <input className='form-control' type='text' value={customer.customerName} name='customerName' onChange={handleChange}/>

            {
                errors.customerName?
                <p className='text-warning'>{errors.customerName.message}</p>:
                null
            }

            <label className='form-label form-label text-bg-dark text-light w-50 rounded-3'>Location:</label>
            <input className='form-control' type='text' value={customer.location} name='location' onChange={handleChange}/>

            {
                errors.location?
                <p className='text-warning'>{errors.location.message}</p>:
                null
            }

            <label className='form-label form-label text-bg-dark text-light w-50 rounded-3'>What's going on?</label>
            <input className='form-control' type='text' value={customer.description} name='description' onChange={handleChange}/>

            {
                errors.description?
                <p className='text-warning'>{errors.description.message}</p>:
                null
            }

            <label className='form-label form-label text-bg-dark text-light w-50 rounded-3'>Type of Service:</label>
            <select className="form-select" name="typeService" onChange={handleChange} value={customer.typeService}>
                <option value="Jumpstart">Jumpstart</option>
                <option value="Vehicle Lockout">Vehicle lockout</option>
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
            <label className='form-label form-label text-bg-dark text-light w-50 rounded-3'>Contact Information:</label>
            <input className='form-control' type='number' value={customer.phoneNumber} name='phoneNumber' onChange={handleChange}/>

            {
                errors.phoneNumber?
                <p className='text-warning'>{errors.phoneNumber.message}</p>:
                null
            }

{/*             <label className='form-label me-3'>Completed</label>
            <input className='form-check-input' type='checkbox' name='completed' onChange={handleChange} value={customer.completed} />

            {
                errors.completed?
                <p className='btn btn-primary'>{errors.completed.message}</p>:
                null
            } */}
            <br/>
            <div className='justify-content-between w-75  d-flex'>
                <button className='btn btn-secondary btn-outline-dark'>Submit</button> 
                
                <Link to={'/dashboard'} className='btn btn-secondary btn-outline-dark'>Go Home</Link>
            </div>
        
        </form> 
        </div>
    )
}

export default CustomerForm;

