import  Phonebook  from "./phonebook/Phonebook";
import { Component } from "react";
import { nanoid } from 'nanoid'
import Contacts from "./contacts/Contacts";
import { Filter } from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter:''
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? alert(
          `user ${name} is already in the contact list`
              )
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };
    
 


  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

    deleteContact =contactId => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact=>contact.id!==contactId),
    })
      )
  }

  render() {
    const { filter } = this.state;
    console.log(filter);
  const filtredContacts = this.filtredContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook onSubmit={this.addContact} onChange={this.handleChange} />
        <Filter filter={filter} onFilter={this.changeFilter} />
        {this.state.contacts.length > 0 ? (
          <Contacts
            names={filtredContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <span text="Contact list is empty."></span>
        )}
        
        </div>
    );
  }
}
export default App