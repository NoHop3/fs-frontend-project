import React from "react";

export default function Contact() {
  return (
    <div id='contact' className='container container5'>
      <h3 className='container__title'>Write me an email or let's connect in my socials!</h3>
      <div className='container5__contact_us'>
        <form action='#'>
          <label htmlFor='fname'>Name:</label>
          <input
            type='text'
            name='fname'
            id='fname'
            placeholder='Your full name'
          />
          <br />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your email'
          />
          <br />
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            id='message'
            cols={50}
            rows={6}
            placeholder='Your message here'></textarea>
          <br />
          <br />
          <input type='submit' value='Send!' id='btnSend' />
        </form>
      </div>
    </div>
  );
}
