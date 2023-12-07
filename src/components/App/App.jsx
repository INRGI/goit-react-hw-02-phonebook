import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import { nanoid } from "nanoid";
import { Component } from "react";

export class App extends Component{
  state = {
    contacts: [],
    filter: ''
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts:[{id: nanoid(), ...contact}, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter/> */}
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  };
};