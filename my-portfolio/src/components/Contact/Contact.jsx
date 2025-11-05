import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData(e.target);

    // Send data to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        e.target.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <section className="contact" id="contact">
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <input type="tel" name="mobile" />
        <textarea name="message"></textarea>
      </form>

      <h2 className="heading">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new opportunities, creative projects,
            or potential collaborations. Feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="bx bx-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>fernandosemal2124@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="bx bx-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>075 760 4427</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="bx bx-map"></i>
              <div>
                <h4>Location</h4>
                <p>Panadura, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {!isSubmitted ? (
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div className="form-row">
              <div className="input-group">
                <input type="text" name="firstName" placeholder="First Name" required />
                <div className="underline"></div>
              </div>
              <div className="input-group">
                <input type="text" name="lastName" placeholder="Last Name" required />
                <div className="underline"></div>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <input type="email" name="email" placeholder="Email Address" required />
                <div className="underline"></div>
              </div>
              <div className="input-group">
                <input type="tel" name="mobile" placeholder="Mobile Number" required />
                <div className="underline"></div>
              </div>
            </div>

            <div className="input-group textarea-group">
              <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
              <div className="underline textarea-underline"></div>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <i className="bx bx-paper-plane"></i>
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h3>🎉 Thank you!</h3>
            <p>Your message has been sent successfully. I’ll get back to you soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
