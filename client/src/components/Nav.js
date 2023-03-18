import {Link} from 'react-router-dom'

const Nav = (props) => {
    return(
        <div className='d-flex justify-content-evenly align-items-center'>
            <h1>Castro Mobile Services</h1>
            <Link to={'/'}>Go Home</Link>
            <Link to={'/customerForm'}> Get Roadside Assistance</Link>
        
        </div>
    )
}


export default Nav; 