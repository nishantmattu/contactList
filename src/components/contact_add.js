import React, { Component } from "react";

class ContactAdd extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChange(event) {
    this.props.onInputChange([event.target.name], event.target.value);
    //[event.target.name]
  }

  onFormSubmit(event) {
    event.preventDefault(); //
    this.props.onContactSubmit();
  }

  render() {
    const { handleSubmit } = this.props;
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const jobTitle = this.props.jobTitle;
    const employer = this.props.employer;

    return (
      <form name="create" onSubmit={this.onFormSubmit} className="input-group">
        <input
          name="firstName"
          placeholder="First Name"
          className="form-control"
          value={firstName}
          onChange={this.onChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          className="form-control"
          value={lastName}
          onChange={this.onChange}
        />
        <input
          name="jobTitle"
          placeholder="Job Title"
          className="form-control"
          value={jobTitle}
          onChange={this.onChange}
        />
        <input
          name="employer"
          placeholder="Employer"
          className="form-control"
          value={employer}
          onChange={this.onChange}
        />
        <button
          type="submit"
          name="createContact"
          className="btn btn-secondary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default ContactAdd;
