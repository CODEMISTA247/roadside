import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const OneCustomer = (props) => {
    const {id} = useParams()
    const [customer,setCustomer] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneCustomer/${id}`)
            .then((res) => {
                console.log(res.data);
                setCustomer(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const deleteCustomer = () => {
        axios.delete(`http://localhost:8000/api/deleteCustomer/${id}`)
        .then((res) => {
            console.log(res);
            navigate ("/")
        })
    }

    return (
        <div className="card w-75 mb-3  m-auto text-bg-secondary rounded-4">
    <div className="card-body">
        <h5 className="card-title">Customer Name: {customer.customerName}</h5>
        <hr /> 
        
        <h6 className="card-subtitle mb-2 text-dark">Service Requested: {customer.typeService}</h6>
        <p className="card-text">Customer Information: {customer.description}</p>
        <p className="card-text">Contact Information: {customer.phoneNumber}</p>
        <button onClick={deleteCustomer} className="btn btn-danger">Cancel Service</button>
        --
        <Link to={'/'}  className='btn btn-danger'>Go Home </Link>
    </div>
</div>
    )


}


export default OneCustomer;