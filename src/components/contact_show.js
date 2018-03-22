import React, { Component } from "react";

class ContactShow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.jobTitle}</td>
        <td>{this.props.employer}</td>
      </tr>
    );
  }
}

export default ContactShow;
