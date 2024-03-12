import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';

import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

const data = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export default function App() {
  const [values, setValues] = useState(() => {
    const storedReviews = localStorage.getItem('localData');
    return storedReviews ? JSON.parse(storedReviews) : data;
  });
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (value, actions) => {
    setValues([...values, { ...value, id: nanoid() }]);
    actions.resetForm();
  };

  useEffect(() => {
    values !== data ? localStorage.setItem('localData', JSON.stringify(values)) : '';
  }, [values]);

  const handlerDelete = idToDelete => {
    setValues(values.filter(value => value.id !== idToDelete));
  };

  useEffect(() => {
    values !== data && values.length !== 0
      ? localStorage.setItem('localData', JSON.stringify(values))
      : '';
  }, [values]);

  const handleSearch = event => {
    setSearchValue(event.target.value);
  };

  const Filtered =
    searchValue.trim() !== ''
      ? values.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase().trim()))
      : values;

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} onAdd={handleSubmit} />
      <SearchBox inputValue={searchValue} onChange={handleSearch} />
      <ContactList contacts={Filtered} onDelete={handlerDelete} />
    </div>
  );
}
