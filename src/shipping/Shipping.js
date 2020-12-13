import { Component } from 'react';
require('./Shipping.css');

export class ShippingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      contactNumber: '',
      shippingAddress: '',
      errors: [],
    };
    this._renderErrors = this._renderErrors.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._validateForm = this._validateForm.bind(this);
  }

  _renderErrors() {
    if (this.state.errors.length > 0) {
      return this.state.errors.map((error) => (
        <div className='alert alert-danger'>{error}</div>
      ));
    }
  }

  handleChange(event, key) {
    let newState = this.state;
    newState[key] = event.target.value;
    this.setState(newState);
  }

  _validateForm() {
    let errors = [];
    if (!this.state.contactNumber || this.state.contactNumber.length > 12) {
      errors.push('Invalid number phone!');
    }
    if (!this.state.shippingAddress.length) {
      errors.push('Please enter shipping address');
    }
    if (this.state.fullName.trim().split(' ').length < 2) {
      errors.push(
        'Please enter full name (including primary name and last name)'
      );
    }

    if (errors.length === 0) {
      return true;
    }
    this.setState({
      errors,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this._validateForm()) {
      this.props.updateFormData({
        fullName: this.state.fullName,
        contactNumber: this.state.contactNumber,
        shippingAddress: this.state.shippingAddress,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Shipping Details</h1>
        {this._renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='fullName'
            placeHolder='Enter you full name'
            value={this.state.fullName}
            onChange={(event) => this.handleChange(event, 'fullName')}
          />
          <input
            type='text'
            name='contactNumber'
            placeHolder='What is your number phone'
            value={this.state.contactNumber}
            onChange={(event) => this.handleChange(event, 'contactNumber')}
          />
          <input
            type='text'
            name='shippingAddress'
            placeHolder='Enter your address'
            value={this.state.shippingAddress}
            onChange={(event) => this.handleChange(event, 'shippingAddress')}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
