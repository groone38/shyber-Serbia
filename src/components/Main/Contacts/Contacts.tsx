import React, { useContext } from 'react';
import { OpenFormContext } from '../../../context';
import Form from './Form';

const Contacts = () => {
  const open = useContext(OpenFormContext);

  return (
    <section className="contacts">
      <div className="conteiner">
        <div
          className={'contacts__title' + ' ' + (open.visible && 'active')}
          onClick={open.toggleForm}>
          <h2 id="contacts">
            email us
            <div className="contacts__title-block"></div>
          </h2>
        </div>
        <Form open={open.visible} />
      </div>
    </section>
  );
};

export default Contacts;
