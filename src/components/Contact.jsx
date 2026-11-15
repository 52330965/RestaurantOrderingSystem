import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [notice, setNotice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice(
      "This contact form is not connected yet. Your message has not been sent.",
    );
  };

  return (
    <main className="contact-page">
      <header className="contact-header">
        <span className="contact-eyebrow">RR Restaurant</span>
        <h1>Let's talk</h1>
        <p>Questions, feedback, or just want to say hello? We’re listening.</p>
      </header>

      <div className="contact-content">
        <section className="contact-intro">
          <span className="contact-eyebrow">Get in touch</span>
          <h2>We'd love to hear from you.</h2>
          <p>
            Send us a note about your experience, our menu, or anything else
            you'd like to share.
          </p>

          <div className="contact-topics">
            <article className="contact-topic">
              <span className="contact-topic-mark" aria-hidden="true">
                01
              </span>
              <div>
                <h3>Menu questions</h3>
                <p>Curious about a dish? Include it in your message.</p>
              </div>
            </article>
            <article className="contact-topic">
              <span className="contact-topic-mark" aria-hidden="true">
                02
              </span>
              <div>
                <h3>Share your feedback</h3>
                <p>Your thoughts help us make every visit better.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-form-card" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Send us a message</h2>
          <p className="contact-form-note">
            This demo form is not connected to a messaging service.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label className="contact-field">
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Name"
                  required
                />
              </label>

              <label className="contact-field">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="contact-field">
              <span>What’s it about?</span>
              <select name="topic" defaultValue="general">
                <option value="general">General question</option>
                <option value="menu">Menu question</option>
                <option value="feedback">Feedback</option>
                <option value="other">Something else</option>
              </select>
            </label>

            <label className="contact-field">
              <span>Your message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
              />
            </label>

            <button className="contact-submit" type="submit">
              Send message
              <span aria-hidden="true">→</span>
            </button>

            <p className="contact-notice" role="status" aria-live="polite">
              {notice}
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
