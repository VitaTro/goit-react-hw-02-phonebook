import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import css from "./Contact.module.css";

const Contact =  ({ contacts, setContacts }) => {
    const [name, setName] = useState('');
  const [number, setNumber] = useState(''); 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') return;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setName('');
    setNumber('');
  };

  return (
    <div className={css.primary}>
      <form className={css.form}>
        <div className={css.container}>
        <label htmlFor="user-name" className={css.label}>Name</label>
            <div>
            <input
            className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />    
            </div>
        </div>

      <div className={css.container}>
      <label  htmlFor="phone" className={css.label}>Number</label>
         <div>
         <input
         className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />
     </div>
      </div>
     <button onClick={handleAddContact} type="submit" className={css.button}>Add contact</button>
      </form>
      </div>
  );
};

export default Contact;
