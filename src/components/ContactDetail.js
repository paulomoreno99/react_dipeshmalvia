import React from 'react'
import user from '../images/user1.svg'
import { Link } from 'react-router-dom'

const ContactDetail = (props) => {

    const { name, email } = props.location.state.contact;
    
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{ name }</div>
                    <div className="description">{ email }</div>
                </div>
            </div>
                <div className="center-div">
                 <Link to="/">
                   <button className="fluid ui button green center">
                       Back to Contact List
                   </button>
                   </Link>  
                </div>
        </div>
    );
};

export default ContactDetail;
