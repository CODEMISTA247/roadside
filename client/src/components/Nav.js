import {Link} from 'react-router-dom'
import logo from '../components/images/images.jpg'
import image from '../components/images/images.png'

const Nav = (props) => {
    
    return(
        <div className='d-flex justify-content-evenly align-items-center bg-secondary'>
            <h1 className='text-bg-danger rounded-3 text-light'>CMS Corp </h1>
            <img style={{width:'50px', borderRadius:'30px'}} src={logo} alt="This Logo"/>
            <img style={{width:'50px', borderRadius:'30px'}} src={image} alt="This Logo"/>

            <Link to={'/'}  className='btn btn-grey'>Go Home</Link>
            <Link to={'/customerForm'}  className='btn btn-lightgrey'> Get Roadside Assistance</Link>
        </div>
    )
}


export default Nav; 