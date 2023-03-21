import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useNavigate, Link, useParams} from 'react-router-dom'


const UpdateCustomer = (props) => {
    const { id } = useParams();

    const [customerName, setCustomerName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [typeService, setTypeService] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errors, setErrors] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneCustomer/${id}`)
            .then(res => {
                setCustomerName(res.data.customerName);
                setLocation(res.data.location);
                setDescription(res.data.description);
                setTypeService(res.data.typeService);
                setPhoneNumber(res.data.phoneNumber);

            })
            .catch(err => console.log(err))
    }, [id])

    const updateCustomer = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateCustomer/${id}`,{
            customerName,
            location,
            description,
            typeService,
            phoneNumber
        })
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);

            })
    }


    return (
        <div className='d-block justify-content-evenly '>
        
            <h2 className='p-3 text-light  w-50 text-bg-secondary border-5 border-light rounded-3'>Edit {customerName}'s Service</h2>
            
            <form className='border-5 m-auto w-50 row g-2 text-light rounded-3' onSubmit={updateCustomer}>
                <label className='form-label text-bg-secondary text-light w-50'>Name:</label>
                <input className='form-control' type='text' value={customerName} name='customerName' onChange={(e) =>{ 
                    setCustomerName(e.target.value)}}/>

                {
                    errors.customerName?
                    <p className='text-warning'>{errors.customerName}</p>:
                    null
                }

                <label className='form-label text-bg-secondary text-light w-50 rounded-3'>Location:</label>
                <input className='form-control ' type='text' value={location} name='location' onChange={(e) => {
                    setLocation(e.target.value)}}/>

                    {
                        errors.location?
                        <p className='text-warning'>{errors.location.message}</p>:
                        null 
                    }

                <label className='form-label text-bg-secondary text-light w-50 rounded-3'>What's Going On?</label>
                <input className='form-control' type='text' value={description} name='description' onChange={(e) => {
                    setDescription(e.target.value)}}/>

                    {
                        errors.description?
                        <p className='text-warning'>{errors.description}</p>:
                        null
                    }

                <label className='form-label text-bg-secondary text-light w-50 rounded-3'>Service Type:</label>
                <input className='form-control' type='text' value={typeService} name='typeService' onChange={(e) => {
                    setTypeService(e.target.value)}}/>

                    {
                        errors.typeService?
                        <p className='text-warning'>{errors.typeService}</p>:
                        null
                    }

                <label className='form-label text-bg-secondary text-light w-50 rounded-3'>Contact Information:</label>
                <input className='form-control' type='number' value={phoneNumber} name='phoneNumber' onChange={(e) => {
                    setPhoneNumber(e.target.value)}}/>

                    {
                        errors.phoneNumber?
                        <p className='text-warning'>{errors.phoneNumber}</p>:
                        null
                    }
                

                <div>
                
                    <button className='btn btn-danger'>Edit Service</button>
                    --
                    <Link to={'/'}  className='btn btn-danger'>Go Home</Link>
                    
                </div>
                

                
                
                
            </form>
        </div>
    )
}


export default UpdateCustomer;