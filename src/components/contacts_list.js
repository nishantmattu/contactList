import React, { Component } from "react";
import ContactAdd from "./contact_add";
import ContactShow from "./contact_show";
import _ from "lodash";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewContact: {
        firstName: "",
        lastName: "",
        jobTitle: "",
        employer: "",
        create: false
      },
      createContact: { clicked: false },
      allContacts: []
    };
    this.onClick = this.onClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onContactSubmit = this.onContactSubmit.bind(this);
    this.renderContacts = this.renderContacts.bind(this);
  }

  onInputChange(name, value) {
    let updatedState = this.state.addNewContact;
    updatedState[name] = value;
    this.setState({ addNewContact: updatedState });
    console.log(this.state.addNewContact);
  }

  onContactSubmit(value) {
    let newContact = this.state.addNewContact;
    newContact.create = true;
    let updatedState = this.state.allContacts;
    this.props.contacts.push(newContact);
    updatedState.push(newContact);
    this.setState({ allContacts: updatedState });

    this.setState({
      createContact: { clicked: false }
    });
    newContact = {
      firstName: "",
      lastName: "",
      jobTitle: "",
      employer: "",
      create: false
    };
    this.setState({
      addNewContact: newContact
    });
  }

  onClick(event) {
    this.setState({
      createContact: { clicked: !this.state.createContact.clicked }
    });
    let newContact = {
      firstName: "",
      lastName: "",
      jobTitle: "",
      employer: "",
      create: false
    };
    this.setState({
      addNewContact: newContact
    });
  }

  renderContacts() {
    let contacts = this.props.contacts;
    //cannot update state during render state transition...no set state here...

    return _.map(contacts, contact => {
      return (
        <ContactShow
          key={contact.firstName}
          firstName={contact.firstName}
          lastName={contact.lastName}
          jobTitle={contact.jobTitle}
          employer={contact.employer}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>

        <button onClick={this.onClick}>+ Create New Contact</button>
        {this.state.createContact.clicked ? (
          <ContactAdd
            firstName={this.state.addNewContact.firstName}
            lastName={this.state.addNewContact.lastName}
            jobTitle={this.state.addNewContact.jobTitle}
            employer={this.state.addNewContact.employer}
            create={this.state.addNewContact.create}
            onInputChange={this.onInputChange}
            onContactSubmit={this.onContactSubmit}
          />
        ) : null}

        <table className="table table-hover">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job Title</th>
              <th>Employer</th>
            </tr>
          </thead>
          <tbody>{this.renderContacts()}</tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
