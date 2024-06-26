import React, { Component } from 'react';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import css from "./ContactAdd.module.css";

const INITIAL_USER = {
  name: "",
  number: "",
};


class ContactAdd extends Component {
user = { ...INITIAL_USER };

// // event.currentTarget в React — це властивість об’єкта події, яка ідентифікує елемент, до якого прикріплений обробник події. 
// Важливо розуміти різницю між event.currentTarget та event.target.

// // event.currentTarget: Це елемент, до якого був прикріплений обробник події. 
// Він може відрізнятися від елемента, який спричинив подію, оскільки подія може бути спричинена нащадком елемента з обробником, 
// // а потім “спливати” вгору до елемента з обробником. 
// Наприклад, якщо ви маєте батьківський елемент з обробником події, а внутрішній елемент спричиняє цю подію, 
// то event.currentTarget буде посилатися на батьківський елемент.
// // event.target: Це елемент, який спричинив подію. Він може бути будь-яким нащадком елемента з обробником3. 
// Наприклад, якщо користувач клікає на кнопку в середині блоку, то event.target буде посилатися на саму кнопку.
// // У більшості випадків ви будете використовувати event.target, оскільки він зазвичай вказує на конкретний елемент, який спричинив подію. 
// // Але іноді event.currentTarget може бути корисним, коли ви хочете отримати доступ до елемента, до якого прикріплений обробник, 
// незалежно від того, який елемент спричинив подію.
handleSubmit = (evt) => {
  evt.preventDefault();
  
  const form = evt.currentTarget;
  const name = form.elements.name.value;
  const number = form.elements.number.value;
  const id = nanoid();

  this.props.onSubmit({ id, name, number });
  form.reset();
};

// const Contact =  ({ contacts, setContacts }) => {
//     const [name, setName] = useState('');
//   const [number, setNumber] = useState(''); 

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = (event) => {
//     setNumber(event.target.value);
//   };

//   const handleAddContact = () => {
//     if (name.trim() === '' || number.trim() === '') return;
//     const newContact = {
//       id: nanoid(),
//       name: '',
//       number: '',
//     };
//     setContacts((prevContacts) => [...prevContacts, newContact]);
//     setName('');
//     setNumber('');
//   };
render() {
  return (
    <div className={css.primary}>
      <form onSubmit={this.handleSubmit} className={css.form}>
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
      />    
            </div>
        </div>

      <div className={css.container}>
      <label  htmlFor="number" className={css.label}>Number</label>
         <div>
         <input
         className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
     </div>
      </div>
     <button  type="submit" className={css.button}>Add contact</button>
      </form>
      </div>
  );
}
};

ContactAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactAdd;
