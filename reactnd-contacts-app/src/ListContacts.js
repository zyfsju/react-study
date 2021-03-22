import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// function ListContacts(props) {
//     return (
//         <ol className="contact-list">
//             {" "}
//             {props.contacts.map((contact) => (
//                 <li key={contact.id} className="contact-list-item">
//                     <div
//                         className="contact-avatar"
//                         style={{
//                             backgroundImage: `url(${contact.avatarURL})`,
//                         }}
//                     ></div>
//                     <div className="contact-details">
//                         <p>{contact.name}</p>
//                         <p>@{contact.handle}</p>
//                     </div>
//                     <button
//                         onClick={() => props.onDeleteContact(contact)}
//                         className="contact-remove"
//                     >
//                         {" "}
//                         Remove{" "}
//                     </button>
//                 </li>
//             ))}
//         </ol>
//     );
// }

// ListContacts.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired,
// };

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    };

    state = {
        query: "",
    };
    updateQuery = (query) => {
        this.setState(() => ({ query: query.trim() }));
    };
    clearQuery = (query) => {
        this.updateQuery("");
    };
    render() {
        // destructuring
        const { query } = this.state;
        const { contacts, onDeleteContact } = this.props;
        const showingContacts =
            query === ""
                ? contacts
                : contacts.filter((c) =>
                      c.name.toLowerCase().includes(query.toLowerCase())
                  );
        /* needs the key to know which item needs changing*/
        return (
            <div className="list-contacts">
                {JSON.stringify(this.state)}
                {JSON.stringify(showingContacts)}
                <div className="list-contacts-top">
                    <input
                        className="search-contacts"
                        type="text"
                        placeholder="Search Contacts"
                        value={query}
                        onChange={(event) =>
                            this.updateQuery(event.target.value)
                        }
                    ></input>
                    <Link to="/create" className="add-contact">
                        Add Contact
                    </Link>
                </div>
                {showingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>
                            Now showing {showingContacts.length} of{" "}
                            {contacts.length}
                        </span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}
                <ol className="contact-list">
                    {" "}
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className="contact-list-item">
                            <div
                                className="contact-avatar"
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`,
                                }}
                            ></div>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>@{contact.handle}</p>
                            </div>

                            <button
                                onClick={() => onDeleteContact(contact)}
                                className="contact-remove"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
export default ListContacts;
