import ContactForm from "components/ContactForm";
import { Component } from "react";

export class App extends Component{
  state = {
    contacts: [],
    filter: ''
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        {/* <Filter/> */}
        {/* <ContactList/> */}
      </div>
    );
  };
};