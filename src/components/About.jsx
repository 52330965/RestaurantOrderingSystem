import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      <header className="about-header">
        <span className="about-eyebrow">Welcome to RR Restaurant</span>
        <h1>Good food brings us together</h1>
        <p>More than food, it's an experience made to be shared.</p>
      </header>

      <div className="about-content">
        <section className="about-story">
          <div className="about-story-copy">
            <span className="about-eyebrow">Our story</span>
            <h2>Made with care, served with heart</h2>
            <p>
              We believe great food brings people together. At RR Restaurant,
              every meal is prepared with fresh ingredients, care, and a love
              for good flavors.
            </p>
            <p>
              From satisfying main dishes to something sweet after your meal,
              we want every visit to feel welcoming and memorable.
            </p>
          </div>

          <div className="about-mission">
            <span className="about-mission-mark" aria-hidden="true">
              RR
            </span>
            <h3>Our mission</h3>
            <p>
              To serve quality food with excellent service in a welcoming
              atmosphere for everyone.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="about-section-heading">
            <span className="about-eyebrow">The RR difference</span>
            <h2>Why choose us?</h2>
            <p>The little things that make every meal feel special.</p>
          </div>

          <div className="about-values-grid">
            <article className="about-box">
              <span className="about-box-number">01</span>
              <h3>Fresh ingredients</h3>
              <p>We choose fresh ingredients to bring every dish to life.</p>
            </article>

            <article className="about-box">
              <span className="about-box-number">02</span>
              <h3>Made with care</h3>
              <p>Every meal is prepared with attention and a little extra love.</p>
            </article>

            <article className="about-box">
              <span className="about-box-number">03</span>
              <h3>Warm service</h3>
              <p>Your comfort and satisfaction are always important to us.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
