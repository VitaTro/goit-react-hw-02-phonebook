import React, { useState } from "react";

import Contact from "./Contact/Contact";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import css from ".//App.module.css";

export const App = () => {
  const [contacts, setContacts] = useState( [
    { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56"},
    { "id": "id-2", "name": "Hermione Kline","number": "443-89-1"},
    { "id": "id-3", "name": "Eden Clements", "number": "645-17-79"},
    { "id": "id-4", "name": "Annie Copeland","number": "227-91-2"}
  ]);
  const [filter, setFilter] = useState('');
  
  return (
    <div className={css.primary}>
<h1 className={css.header}>Phonebook</h1>
<Contact contacts = { contacts } setContacts = { setContacts } />
<h2 className={css.header}>Contacts</h2>
< Filter filter = { filter } setFilter = { setFilter } />
<ContactList contacts = { contacts } filter = { filter } />
     </div>
  );
};

export default App;