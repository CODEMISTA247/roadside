import './App.css';
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import CustomerForm from './components/CustomerForm'; 
import DisplayAllCustomers from './components/DisplayAllCustomers';
import Nav from './components/Nav';
import OneCustomer from './components/OneCustomer';
import UpdateCustomer from './components/Edit';
import InstagramButton from './components/InstagramLink';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/footer'
/* import PushNotification from './components/PushNotification'; */





function App() {
  const clickTONotify = () => {
    addNotification({
        title: 'Test This Notification',
        message: 'You have a new service',
        duration: 5000,
        native: true,
        onClick: ()=> console.log('Push Notification'),
    });
}

  const [allCustomers, setAllCustomers] = useState([]) 
  return (
    
    <div className='App'>
    <Nav/>

    <br/>
    <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element= {<DisplayAllCustomers allCustomers={allCustomers} setAllCustomers={setAllCustomers}/> }/>
  
    <Route path='/customerForm' element={<CustomerForm allCustomers={allCustomers} setAllCustomers={setAllCustomers}/>}/> 

    <Route path='/oneCustomer/:id' element={<OneCustomer />} />
    <Route path='/updateCustomer/:id' element={<UpdateCustomer />} />
  </Routes>
    <Footer/>
      
    {/* <PushNotification /> */}
    

    
    </div>
  );
}

export default App;
