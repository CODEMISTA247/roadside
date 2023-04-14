import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'



const DisplayAllCustomers = (props) => {
    const{allCustomers, setAllCustomers} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/allCustomers')
            .then((allCustomers) => {
                console.log(allCustomers);
                setAllCustomers(allCustomers.data)
            })
            .catch((err) => {
                console.log(err);
            })
    })

    return(
        <div>
            <h2 className='text-light text-bg-secondary w-75 border-radius p-3 rounded-3 '>Services In Progress:</h2>

            {
                allCustomers.map((customer) => (
                    <div className='' key={customer._id}>
                
                        <div className='card card-body w-50 m-auto d-flex mb-3 text-bg-secondary rounded-4 '>
                        
                        <h5 className='card-title'>Service Type:  {customer.typeService}</h5>
                        <br/>
                        <p className='card-text'>Name: {customer.customerName}</p>
                        <p className='card-text'>Location: {customer.location}</p>

                        <div className='d-flex justify-content-end justify-content-evenly'>
                            
                        
                        <p className='card-text '><Link to={`/oneCustomer/${customer._id}`} className='btn btn-danger'>View</Link>
                        </p>
                        
                        <p><Link to={`/updateCustomer/${customer._id}`} className='btn btn-danger'>Edit Service</Link></p>
                        </div>
                    </div>

                        
                
                    
                </div>


            ))
        }
        </div>
    )
}

export default DisplayAllCustomers;