import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate, useParams, Link} from 'react-router-dom'
import gif from '../components/images/ServiceGift.gif'



const DisplayAllCustomers = (props) => {
    const{allCustomers, setAllCustomers} = props
    const{id} = useParams()
    const navigate = useNavigate()
    const [completedServices, setCompletedServices] = useState([])

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

    const deleteCustomer = (customer) => {
        axios.delete(`http://localhost:8000/api/deleteCustomer/${customer._id}`)
        .then((res) => {
            console.log(res);
            navigate ("/dashboard")
            /* const customer = allCustomers.find((c) => c._id === customerId); */
            setCompletedServices(prevServices => [...prevServices, {customerId: customer._id, customerName: customer.customerName, typeService: customer.typeService}])
        })
        .catch((error) => {
            console.log(error);
        });
    }






    
    return(
        
        <div className='container'>
            <div className='header-container'>
                <h2 className='header text-light'>Services in progress:
                <img style={{width:'300px', borderRadius:'30px', opacity:'0.8'}} src={gif} alt="This Logo"/></h2>
            </div>


            
        
        <div className='card card-container'>
            
            {
                allCustomers.map((customer) => (
                    <div className='' key={customer._id}>
                
                        <div className='card card-body w-100 m-3 mb-3 text-bg-dark test-white '>
                        
                        <h5 className='card-title'>  {customer.typeService}</h5>
                        <br/>
                        <p className='card-text'>Name: {customer.customerName}</p>
                        <p className='card-text'>Location: {customer.location}</p>
                        <button onClick={() => deleteCustomer(customer)} className='btn btn-danger btn-outline-dark text-dark'>Complete Service</button>



                        <div className='d-flex justify-content-end justify-content-evenly'>
                            
                        
                        <p className='card-text '><Link to={`/oneCustomer/${customer._id}`} className='btn btn-secondary btn-outline-dark'>View</Link>
                        </p>
                        
                        <p><Link to={`/updateCustomer/${customer._id}`} className='btn btn-secondary btn-outline-dark'>Edit Service</Link></p>
                        </div>
                    </div>

                    

                        
                
                    
                </div>

                    
            ))
        }
        </div>

        {/* Display completed services */}
        <div className='card card-container text-light'>
        <h5 className='card-title'>Completed Services</h5>
        <div className='card-body w-100 m-3 mb-3 text-bg-dark test-white'>
            {completedServices.map((service) => (
            <div key={service.customerId}>
                
                <p>Service ID: {service.customerId}</p>
                <p>Customer Name: {service.customerName}</p>
                <p>Service Type: {service.typeService}</p>
                <hr /> 
                
            </div>
            ))}
        </div>
        </div>
    
        </div>
        


        
    )

}

export default DisplayAllCustomers;