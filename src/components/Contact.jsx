import './Contact.css';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const isFormValid = form.name && form.email && form.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    emailjs
      .send(
        "service_i15ikgf",
        "template_o264a2j",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        "jnjchWc4EHrXuVjt9"
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        alert("Failed to send message");
        console.error(err);
      });
  };

  return (
    <section className="section contact">
      <div className="section-container contact-container">
        <div className="contact-title">LET’S BUILD TOGETHER</div>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button
          className="btn-submit"
          onClick={handleSend}
          disabled={!isFormValid}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
