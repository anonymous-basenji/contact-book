import { useState } from 'react';
import ContactCard from './components/ContactCard';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddContact = (e) => {
    e.preventDefault();
    if(!(name.trim() === '' || email.trim() === '')) {
      setContacts([...contacts, {
        id: Date.now(),
        name: name,
        email: email
      }]);
      
      setName('');
      setEmail('');
    }
  }

  return (
    <div>
      <h1>My Contact Book</h1>
      <form onSubmit={handleAddContact}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Add Contact</button>
      </form>
      <div>
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
  );
}

export default App;
