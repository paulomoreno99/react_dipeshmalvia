import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'



const ContactList = (props) => {
      
    const deleteContacHandler = (id) => {
      props.getContactId(id);
    }


    


    const renderContactList = props.contacts.map((contact) => {
        return (
          <ContactCard 
          contact={contact}
          clickHander={deleteContacHandler}
          key={ contact.id }
          />
         
        );
    });

    return (
    <div class="main">
      
      <h2>
        Contact list
        <Link to="/add"><button className="ui button blue">Add Contact</button></Link>
      
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
    );
};

export default ContactList;




/*<table>
              <tr>
                <th>Nome</th>
                <th>Email</th>
              </tr>
              <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
              </tr>
            </table>*/