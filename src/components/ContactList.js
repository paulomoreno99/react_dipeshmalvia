import React from 'react'
import ContactCard from './ContactCard'



const ContactList = (props) => {
      
    const deleteContacHandler = (id) => {
      props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return (
           <ContactCard contact={contact} clickHander={deleteContacHandler} key={ contact.id }/>
            
        )
    })
    return <div className="ui celled list">{renderContactList}</div>
    
}

export default ContactList




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