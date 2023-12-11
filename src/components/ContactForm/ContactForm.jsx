import { nanoid } from 'nanoid';
import { Component } from "react";
import { Button, Container, Form, Input, Label } from './ContactForm.styled';

class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    };

    nameId = nanoid();
    numberId = nanoid();
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({name: this.state.name, number: this.state.number})
        this.reset();
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };

    render() {

        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Label htmlFor={this.nameId}>
                        Name
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </Label>
                    
                    <Label htmlFor={this.numberId}>
                        Number
                        <Input
                            type="tel"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleChange}
                            required
                        />
                    </Label>
                    
                    <Button type='submit'>Add contact</Button>
                </Form>
            </Container>
        );
    };
};

export default ContactForm;