import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactTitle, Container, EmptyTitle, PhoneTitle } from "./App.styled";

export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  addContact = contact => {

    const isContact = this.state.contacts.some(
      ({name})=> name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContact) {
      alert(`${contact.name} is already in contacts`)
      return;
    };

    this.setState(prevState => ({
      contacts:[{id: nanoid(), ...contact}, ...prevState.contacts],
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  filterChange = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({id}) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <PhoneTitle>Phonebook</PhoneTitle>
        <ContactForm onSubmit={this.addContact} />

        <ContactTitle>Contacts</ContactTitle>
        {this.state.contacts.length > 0 ? (
        <Filter value={filter} onFilterChange={this.filterChange}/>
        ) : (
          <EmptyTitle>Your phonebook is empty.</EmptyTitle>
        )}
        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
        
      </Container>
    );
  };
};