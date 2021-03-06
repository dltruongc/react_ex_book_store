import { Component } from 'react';

export class DeliveryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { deliveryOption: 'Primary' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ deliveryOption: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.updateFormData(this.state);
  }

  render() {
    return (
      <div>
        <h1>Choose your delivery options here.</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className='radio'>
              <label>
                <input
                  type='radio'
                  checked={this.state.deliveryOption === 'Primary'}
                  value='Primary'
                  onChange={this.handleChange}
                />
                Primary -- Next day delivery
              </label>
            </div>
            <label>
              <input
                type='radio'
                checked={this.state.deliveryOption === 'Normal'}
                value='Normal'
                onChange={this.handleChange}
              />
              Normal -- 3-4 days
            </label>

            <button className='btn btn-success full-width'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
