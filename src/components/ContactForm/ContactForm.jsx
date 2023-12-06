import { nanoid } from 'nanoid';
import { Component } from "react";

class ContactForm extends Component{
    state = {
        contacts: [],
        name: '',
        number: ''
    };

    nameId = nanoid();
    numberId = nanoid();
    
    handleSubmit = event => {
        event.preventDefault();

        this.reset();
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.handleChange} required />
                    <input type="tel" name="number" required />
                    <button type='submit'>Add contact</button>
                </form>
            </div>
        );
    };
};

export default ContactForm;