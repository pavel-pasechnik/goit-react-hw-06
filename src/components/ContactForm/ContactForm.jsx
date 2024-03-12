import { useId } from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import { Formik } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export default function ContactForm({ initialValues, onAdd }) {
  const nameId = useId();
  const numberId = useId();

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onAdd} validationSchema={FeedbackSchema}>
        <Form>
          <label htmlFor={nameId}>Name</label>
          <Field type='text' name='name' id={nameId}></Field>
          <span className={css.spanName}>
            <ErrorMessage name='name' as='span' />
          </span>
          <label htmlFor={numberId}>Number</label>
          <Field type='text' name='number' id={numberId}></Field>
          <span className={css.spanNumber}>
            <ErrorMessage name='number' as='span' />
          </span>
          <button className={css.submit} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
