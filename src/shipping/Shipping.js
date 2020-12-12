import { Component } from 'react';

export class ShippingDetails extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      fullName: null,
      contactNumber: null,
      shippingAddress: null,
      error: null
    }
    this._renderError = this._renderError.bind(this);
  }

  
  _renderError() {
    if (this.state.error) {
      return <div className='alert alert-danger'>{this.state.error}</div>
    }
  }

  render() {
    return (
      <div>
        <h1>Shipping Details</h1>
        {this._renderError()}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='fullName' placeHolder='Enter you full name'/>
          <input type="text" name='contactNumber' placeHolder='What is your number phone'/>
          <input type="text" name='shippingAddress' placeHolder='Enter your address'/>
        </form>
      </div>
    );
  }
}