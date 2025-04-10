import React from "react";
import "./Contact.css";

const Contact = React.memo(({ contacts }) => {
  return (
    <div className="contact-card">
      <div className="card-container">
        <div className="image-container">
          <img
            src={contacts.cimageurls[0]}
            alt={contacts.cname}
            className="contact-image"
          />
          <div className="image-overlay">
            <h2 className="contact-name">{contacts.cname}</h2>
            <div className="location">
              <i className="fa-solid fa-location-dot" />
              <span>{contacts.clocation}</span>
            </div>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-info">
            <p className="phone">{contacts.cphonenumber}</p>
            <p className="email">{contacts.cemail}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
