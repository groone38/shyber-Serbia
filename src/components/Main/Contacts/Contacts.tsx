import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { OpenFormContext } from '../../../context';
import Form from './Form';

const Contacts = () => {
  const open = useContext(OpenFormContext);
  const ref = useRef<HTMLInputElement>(null);
  const scroll = () => {
    setTimeout(() => {
      if (ref.current) ref.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 465);
  };
  useEffect(() => {
    if (open.visible) {
      setTimeout(() => {
        if (ref.current) ref.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 465);
    }
  }, [open.visible]);
  return (
    <section className="contacts">
      <div className="conteiner">
        <div
          className={'contacts__title' + ' ' + (open.visible && 'active')}
          onClick={() => {
            open.toggleForm();
            scroll();
          }}>
          <h2 id="contacts">
            email us
            <div className="contacts__title-block"></div>
          </h2>
        </div>
        <Form open={open.visible} />
        <div ref={ref}></div>
      </div>
    </section>
  );
};

export default Contacts;
