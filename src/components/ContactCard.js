import React from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const { _id, name, email } = props.contact;

    return (
        <div className="item">
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                  <Link to={{pathname:`/contact/${_id}`, state:{contact: props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                  </Link>
                </div>
                <i className="trash alternate outline icon right"
                style={{color: "red", marginTop: "7px ", marginLeft: "10px"}}
                onClick={() => props.clickHander(_id)}
                ></i>
                <Link to={{pathname:`/edit/${_id}`, state:{contact: props.contact}}}>
                <i className="edit alternate outline icon right"
                style={{color: "blue", marginTop: "7px "}}
                
                ></i>
                </Link>

               </div>
               
    )
}

export default ContactCard

/*<div className="item">
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                  <Link to={`/contact/${id}`}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                  </Link>
                </div>
                <i className="trash alternate outline icon right"
                style={{color: "red", marginTop: "7px "}}
                onClick={() => props.clickHander(id)}
                ></i>

               </div>*/