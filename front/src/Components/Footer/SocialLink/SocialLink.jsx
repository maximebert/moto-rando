// import react
import React from 'react';
import { FaFacebookF,FaInstagram } from "react-icons/fa";

// import style
import '../SocialLink/socialLink.scss';


const SocialLink = () => {
    return (
        <div className='socialLink'>
        <redirect to="#"><FaFacebookF/></redirect>
        <redirect to="#"><FaInstagram/></redirect>
        </div>
    )
}

export default React.memo(SocialLink);
