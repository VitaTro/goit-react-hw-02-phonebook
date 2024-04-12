import React, { useState } from "react";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, filter }) => {
 const  filteredContacts = contacts.filter ((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
   return (
    <div className={css.primary}>
<ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} ({contact.number})
          </li>
        ))}
      </ul>
      </div>
    );
};
export default ContactList;