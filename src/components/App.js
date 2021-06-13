import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';
import api from '../api/db';

function App() {

//const local_storage_key = "contacts";  
const [contacts, setContacts] = useState([])

// RetriveContacts
    const retrieveContacts = async () => {
      const response = await api.get("/show");
      return response.data;
     
      
    };

const addContactHandler = async (contact) => {
  //console.log(contact)
  setContacts([...contacts, contact ]);
  //setContacts([...contacts, { id: uuid(), ...contact }]);

  const request = contact;
    

  const response = await api.post("/show", request);
  //console.log(response);
  setContacts([...contacts, response.data]);
}

const updateContactHandler = async (contact) => {
    const response = await api.put(`/show/${contact._id}`, contact);
    const { _id, name, email } = response.data
    setContacts(
      contacts.map((contact) => {
        return contact._id === _id ? { ...response.data } : contact;
      })
    )
  
}
  
const removeContactHandler = async (_id) => {
  await api.delete(`/show/${_id}`);
  
  /*const newContactList = contacts.filter((contact) => {
    return contact._id !== _id;
    //console.log(newContactList);
  })
  setContacts(newContactList);*/
}

useEffect(() => {
  //const retriveContacts = JSON.parse(localStorage.getItem(local_storage_key))
  //if (retriveContacts) setContacts(retriveContacts);

  const getAllContacts = async () => {
    const allContacts = await retrieveContacts();
    if (allContacts) setContacts(allContacts);
    console.log(allContacts);
  }
  getAllContacts();
  
  
}, []);

useEffect(() => {
  //localStorage.setItem(local_storage_key, JSON.stringify(contacts))
}, [contacts]);

  return (
    <div className="ui container">
      <Router>
       <Header />
       <Switch>
          <Route path="/"
          exact 
          render={(props) => (
            <ContactList
            {...props}
            contacts={contacts}
            getContactId={removeContactHandler}
           />
          )}
          />
          <Route path="/add"
          render={(props) => (
            <AddContact {...props}addContactHandler={addContactHandler} />
          )}
          />
          <Route path="/edit"
          render={(props) => (
            <EditContact {...props}updateContactHandler={updateContactHandler} />
          )}
          />
          <Route path="/contact/:id" component={ContactDetail}/>
            
       </Switch>

      </Router>
      
      {/*<AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
    </div>
  );
}

export default App;
