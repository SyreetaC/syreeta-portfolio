import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="formContainer">
      <form className="contactForm">
        <label className="formLabel">Name:</label>
        <br />
        <input className="formInput" type="text" name="name" />
        <br />
        <label className="formLabel">Contact number:</label>
        <br />
        <input className="formInput" type="text" name="contact-number" />
        <br />
        <label className="formLabel">Email:</label>
        <br />
        <input className="formInput" type="text" name="email" />
        <br />
      </form>
      <div className="buttonContainer">
        <button className="submitButton">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
