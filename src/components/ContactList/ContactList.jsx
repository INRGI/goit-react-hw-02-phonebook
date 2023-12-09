import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(contact => (
            <li key={contact.id}>
                {contact.name + ' : ' + contact.number}
                <button
                    type='button'
                    name='delete'
                    onClick={() => onDeleteContact(contact.id)}
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;