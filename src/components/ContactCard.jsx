import React from 'react';

const ContactCard = ({contact, onDelete}) => {
    return(
        <div className="contact-card" key={contact.id}>
            <div className="left-side">
                <h2>{contact.name}</h2>
                <p>{contact.email}</p>
            </div>
            <div className="right-side">
                <button className="delete-btn" onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
        </div>
    );
}

export default ContactCard;