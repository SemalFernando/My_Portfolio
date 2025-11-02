import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message sent successfully!');
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span><span className="animate scroll" style={{"--i":1}}></span></h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="First Name" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Last Name" required />
            <span className="focus"></span>
          </div>

          <span className="animate scroll" style={{"--i":3}}></span>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input type="email" placeholder="Email Address" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="tel" placeholder="Mobile Number" required />
            <span className="focus"></span>
          </div>

          <span className="animate scroll" style={{"--i":5}}></span>
        </div>

        <div className="textarea-field">
          <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
          <span className="focus"></span>

          <span className="animate scroll" style={{"--i":7}}></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">Submit</button>

          <span className="animate scroll" style={{"--i":9}}></span>
        </div>
      </form>
    </section>
  );
};

export default Contact;