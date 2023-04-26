import React from 'react';
import './loginRegForm.css'
import icon from '../components/images/icon.png'
import yelp from '../components/images/yelp.png'
import facebook from '../components/images/Facebook.png'
import whatsapp from '../components/images/whatsapp.png'



const Footer = () => {
    return (
        
        <div className='text-bg-dark text-white footer width: 50% d-flex justify-content-between'>
        <h6>Contact Us:</h6>
        <div className=''>
        <a href="https://www.instagram.com/cms.corp">
        <img style={{width:'50px', borderRadius:'0px'}} src={icon} />
        {/* <button >Check Us Out on Instagram</button> */}
        </a>
        <a href="https://www.facebook.com/profile.php?id=100090112028059">
        <img style={{width:'30px', borderRadius:'0px'}} src={facebook} />
        </a>
        <a href="https://www.yelp.com/biz/castro-mobile-services-new-york#reviews">
        <img style={{width:'30px', borderRadius:'40px'}} src={yelp} />
        </a>
        <img
        alt='191823444'
        style={{width:'30px', borderRadius:'40px'}}
        src={whatsapp}
        onMouseEnter={(e) => {
            const popup = document.createElement('div');
            popup.innerHTML = 'WhatsApp Contact Info: (929)200-2977';
            popup.style.position = 'absolute';
            popup.style.top = `-${popup.offsetHeight + 40 }px`;
            popup.style.left = '0';
            popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            popup.style.color = '#fff';
            popup.style.padding = '5px';
            e.target.parentNode.appendChild(popup);
            e.target.popup = popup;
        }}
        onMouseLeave={(e) => {
            setTimeout(() => {
                    e.target.popup.remove();
            }, 2050);

        }}
    />
        
        </div>

        </div>
    );
}

export default Footer;
