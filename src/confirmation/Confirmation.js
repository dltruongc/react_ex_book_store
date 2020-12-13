import { Component } from 'react';

export class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.updateFormData({});
  }

  render() {
    return (
      <div className='wrap'>
        <h1>Are you sure you want to submit the data?</h1>
        <div>
          <strong>Full name:</strong> {this.props.data.fullName}
        </div>
        <div>
          <strong>Contact number:</strong> {this.props.data.contactNumber}
        </div>
        <div>
          <strong>Selected books:</strong>{' '}
          {this.props.data.selectedBooks.join(', ')}
        </div>
        <div>
          <strong>Shipping address:</strong> {this.props.data.shippingAddress}
        </div>
        <div>
          <strong>Delivery details:</strong> {this.props.data.deliveryOption}
        </div>
        <a className='btn btn-success' href={' '} onClick={this.handleSubmit}>
          Place order
        </a>
      </div>
    );
  }
}
