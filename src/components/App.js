import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {

const local_storage_key = "contacts";  
const [contacts, setContacts] = useState([])

const addContactHandler = (contact) => {
  console.log(contact)
  //setContacts([...contacts, contact ]);
  setContacts([...contacts, { id: uuid(), ...contact }]);
}

const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  })
  setContacts(newContactList);
}

useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(local_storage_key))
  if (retriveContacts) setContacts(retriveContacts);
}, []);

useEffect(() => {
  localStorage.setItem(local_storage_key, JSON.stringify(contacts))
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
          <Route path="/contact/:id" component={ContactDetail}/>
            
       </Switch>

      </Router>
      
      {/*<AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
    </div>
  );
}

export default App;
