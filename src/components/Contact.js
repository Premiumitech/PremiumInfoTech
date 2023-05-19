import'./ContactStyle.css'
import contactSubmitBtn from './Contact/submit.png'
import contactPic from './Contact/Contact.png'
import React, { useState } from 'react';

function Contact () {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(message)

    let mailBody = (name) + " " + (email) + " " + (phone) + " " + (message) 

    window.open(`mailto:premiumitechdesign@gmail.com?subject=Enquiry&body=${mailBody}`);

    setName('')
    setEmail('')
    setPhone('')
    setMessage('')


  }

  return (
    <section id="contact">
    <div className="container-contact">
      <p className="contact-tittle">Get in touch with us!
      </p>
      <div className="row">
        <div className="col-md-6">    
          <form>
            <div className="form-group">
              <label htmlFor="name-button">Name</label>
              <input type="text" className="name-textarea" value={name} onChange={(e) => setName(e.target.value)} id="name-text-area" placeholder />
            </div>
            <div className="form-group">
              <label htmlFor="email-button">Email</label>
              <input type="text" className="email-textarea" value={email} onChange={(a) => setEmail(a.target.value)} id="email-text-area" placeholder />
            </div>
            <div className="form-group">
              <label htmlFor="phone-button">Phone</label>
              <input type="text" className="phone-textarea" value={phone} onChange={(g) => setPhone(g.target.value)} id="phone-text-area" placeholder />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Message</label>
              <textarea className="message-textarea" id="message-text-area" value={message} onChange={(s) => setMessage(s.target.value)} rows={8} cols={50} defaultValue={""} />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img className="contact-image" src={contactPic} alt="" />
        </div> 
      </div>
      <div className="submit-icon-button">
        <button className="submit-button" onClick={handleSubmit}>
          <img className="submit-icon" src={contactSubmitBtn} alt="" />
          <span className="submit">SUBMIT</span>
        </button>
      </div>
    </div>
  </section>
);
}

export default Contact