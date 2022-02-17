import "../../../styles/Form.css";
import * as emailjs from "emailjs-com";
import { useState } from "react";
import { evtChangeType } from "../../../typescript/types";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "default_service",
        "template_8k967km",
        toSend,
        "user_TxcZ8p3cECUFbyuSNc57n"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e: evtChangeType) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const handleMessChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className='contact-box' id='contact'>
      <h2>Contact me!</h2>
      <form onSubmit={onSubmit}>
        <div className='form-box'>
          <input
            onChange={handleChange}
            type='text'
            name='from_name'
            id='from_name'
            required={true}
          />
          <label htmlFor='name'>Full Name</label>
        </div>
        <div className='form-box'>
          <input
            onChange={handleChange}
            type='email'
            name='from_email'
            id='from_email'
            required
          />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='form-box'>
          <textarea
            onChange={handleMessChange}
            name='message'
            id='message'
            required
            cols={35}
            rows={5}></textarea>
          <label htmlFor='message'>Your message here</label>
        </div>
        <div className='submitFormBtn'>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
