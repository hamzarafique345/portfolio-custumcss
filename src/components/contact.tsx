import React from 'react'

export default function Contact() {
  return (
    <div>

<section className="feedback-section">
    <div className="container">
      <div className="map-container">
        <iframe
          className="map-iframe"
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"

        />
        <div className="info-card">
          <div className="address-info">
            <h2 className="info-title">ADDRESS</h2>
            <p className="info-description">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          </div>
          <div className="contact-info">
            <h2 className="info-title">EMAIL</h2>
            <a href="mailto:example@email.com" className="info-link">example@email.com</a>
            <h2 className="info-title">PHONE</h2>
            <p className="info-description">123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="feedback-form">
        <h2 className="feedback-title">Feedback</h2>
        <p className="feedback-description">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="form-input message-input"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Feedback</button>
        </form>
        <p className="footer-text">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
    </div>
  </section>
</div>
  )
}
