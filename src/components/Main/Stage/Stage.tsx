import React, { useContext } from 'react';
import { OpenFormContext } from '../../../context';

const Stage = () => {
  const open = useContext(OpenFormContext);
  return (
    <section className="stage" id="EXPERTISE">
      <div className="stage__main  conteiner">
        <h1 className="stage__title">We develop kinds of cool stuff</h1>
        <div className="stage__greetings">
          <p>Hello!</p>
          <p>
            we are consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo
            nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
          </p>
        </div>
        <a href="#form">
          <button className="btn btn-mobile" onClick={() => open.toggleForm()}>
            start a project
          </button>
        </a>
      </div>
      <h1 className="stage__transition">Services</h1>
    </section>
  );
};

export default Stage;
