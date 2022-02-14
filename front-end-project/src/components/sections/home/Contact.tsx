import React from "react";

export default function Contact() {
  const handleForm = () => {

  }
  return (
    <div className='contact-box'>
      <h2>Contact me!</h2>
      <form>
        <div className='form-box'>
          <input type='text' name='fullName' id='fullName' required={true} />
          <label htmlFor='name'>Full Name</label>
        </div>
        <div className='form-box'>
          <input type='email' name='email' id='emailId' required />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='form-box'>
          <textarea
            name='message'
            id='contactMessage'
            required
            cols={35}
            rows={5}></textarea>
          <label htmlFor='message'>Your message here</label>
        </div>
        <div className='submitBtn'>
          <button onClick={handleForm}>
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

// export default function Contact() {
//   return (
//     <div id='contact' classNameName='contact_me'>
//       <h3 classNameName='contact_me__title'>Write me an email or let's connect in my socials!</h3>
//       <div classNameName='contact_me__form'>
//         <form action='#'>
//           <label htmlFor='fname'>Name:</label>
//           <input
//             type='text'
//             name='fname'
//             id='fname'
//             placeholder='Your full name'
//           />
//           <br />
//           <label htmlFor='email'>Email:</label>
//           <input
//             type='email'
//             name='email'
//             id='email'
//             placeholder='Your email'
//           />
//           <br />
//           <label htmlFor='message'>Message:</label>
//           <textarea
//             name='message'
//             id='message'
//             cols={50}
//             rows={6}
//             placeholder='Your message here'></textarea>
//           <br />
//           <br />
//           <input type='submit' value='Send!' classNameName="btn" id='btnSend' />
//         </form>
//       </div>
//     </div>
//   );
// }
