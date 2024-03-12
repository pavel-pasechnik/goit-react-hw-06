import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <div className={css.list}>
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className='item'>
                <Contact
                  name={contact.name}
                  phone={contact.number}
                  id={contact.id}
                  onDelete={onDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
