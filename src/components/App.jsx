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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    })
    )
  };

  componentDidMount() {
    console.log('did mount');
    const contacts1 = localStorage.getItem('contacts');
    const parsedContatcts = JSON.parse(contacts1);
    console.log(parsedContatcts);
    if (parsedContatcts) {
      this.setState({ contacts: parsedContatcts });
    }
    
}

  componentDidUpdate(prevProps, prevState) {
    console.log('Did update');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Smth have happened')
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
}

  render() {
    const { filter } = this.state;
    console.log(filter);
  const filtredContacts = this.filtredContacts();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <Phonebook onSubmit={this.addContact} onChange={this.handleChange} />
        <Filter filter={filter} onFilter={this.changeFilter} />
        {this.state.contacts.length > 0 ? (
          <Contacts
            names={filtredContacts}
            onDeleteContacts={this.deleteContact}
          />
        ) : (
          <span text="Contact list is empty."></span>
        )}
        
        </div>
    );
  }
}
export default App