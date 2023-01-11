import React, { useState } from 'react';
import arrow from '../../../images/icon.png';

interface FormProps {
  open: boolean;
}

const Form = ({ open }: FormProps) => {
  const [tag, setTag] = useState([
    { id: 1, text: 'Frontend develop', check: false },
    { id: 2, text: 'Backend develop', check: false },
    { id: 3, text: 'Web develop', check: false },
    { id: 4, text: 'Android app', check: false },
    { id: 5, text: 'iOs app', check: false },
    { id: 6, text: 'Chat bot (Telegram)', check: false },
    { id: 7, text: 'Testing', check: false },
    { id: 8, text: 'Support', check: false },
  ]);
  const [inputText, setInputText] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
  });
  const onCheck = (id: number) => {
    setTag([
      ...tag.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        }
        return item;
      }),
    ]);
  };

  const onValueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHendler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const _tag = tag.filter((item) => {
      if (item.check) {
        return item.text;
      }
    });

    const arr = {
      ...inputText,
      ..._tag,
    };
    console.log(arr);
  };

  return (
    <form className={'form' + ' ' + (open && 'ac')} onSubmit={onSubmitHendler} id="form">
      <div className="form__entry">
        <div className="form-left">
          <input type="text" placeholder="Your name*" name="name" onChange={onValueHandler} />
          <input type="text" placeholder="Your e-mail*" name="email" onChange={onValueHandler} />
          <input
            type="text"
            placeholder="Tell us about your project..."
            name="project"
            onChange={onValueHandler}
          />
          <input
            type="text"
            placeholder="Tell us your approximate budget..."
            name="budget"
            onChange={onValueHandler}
          />
        </div>
        <div className="form-right">
          <div className="form__tag">
            {tag.map((item) => (
              <span
                key={item.id}
                className={'tag ' + (item.check && ' checked')}
                onClick={() => onCheck(item.id)}>
                {item.text}
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder="Tell us your approximate budget..."
            name="budget"
            onChange={onValueHandler}
          />
        </div>
      </div>
      <button className="form__btn">
        send
        <img src={arrow} alt="arrow" />
      </button>
    </form>
  );
};

export default Form;
