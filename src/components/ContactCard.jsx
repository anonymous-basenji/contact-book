import React from 'react';

const ContactCard = ({contact}) => {
    return(
        <div className="contact-card" key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
        </div>
    );
}

export default ContactCard;