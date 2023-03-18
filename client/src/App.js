import './App.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import CustomerForm from './components/CustomerForm'; 
import DisplayAllCustomers from './components/DisplayAllCustomers';
import Nav from './components/Nav';


function App() {

  const [allCustomers, setAllCustomers] = useState([]) 
  return (
    <div className='App'>
    <Nav/>
    <Routes>
    <Route path='/' element= {<DisplayAllCustomers allCustomers={allCustomers} setAllCustomers={setAllCustomers}/> }/>
  
    <Route path='/customerForm' element={<CustomerForm allCustomers={allCustomers} setAllCustomers={setAllCustomers}/>}/> 
  </Routes>

    

    
    </div>
  );
}

export default App;
