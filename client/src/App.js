import './App.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import CustomerForm from './components/CustomerForm'; 
import DisplayAllCustomers from './components/DisplayAllCustomers';
import Nav from './components/Nav';
import OneCustomer from './components/OneCustomer';
import UpdateCustomer from './components/Edit';




function App() {

  const [allCustomers, setAllCustomers] = useState([]) 
  return (
    
    <div className='App'>
    <Nav/>
    <br/>
    <Routes>

    <Route path='/' element= {<DisplayAllCustomers allCustomers={allCustomers} setAllCustomers={setAllCustomers}/> }/>
  
    <Route path='/customerForm' element={<CustomerForm allCustomers={allCustomers} setAllCustomers={setAllCustomers}/>}/> 

    <Route path='/oneCustomer/:id' element={<OneCustomer />} />
    <Route path='/updateCustomer/:id' element={<UpdateCustomer />} />
  </Routes>

    

    
    </div>
  );
}

export default App;
