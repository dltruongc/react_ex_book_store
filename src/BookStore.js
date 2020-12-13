import { Component } from 'react';
import { ShippingDetails } from './shipping/Shipping.js';
import { DeliveryDetails } from './delivery/Delivery.js';
import { Confirmation } from './confirmation/Confirmation.js';
import { Success } from './success/Success.js';

require('./BookStore.css');

class BookStore extends Component {
  constructor(props) {
    super(props);
    this.state = { currentStep: 1, formValues: {} };

    this.updateFormData = this.updateFormData.bind(this);
  }

  updateFormData(formData) {
    this.setState({
      formValues: Object.assign({}, this.state.formValues, formData),
      currentStep: this.state.currentStep + 1,
    });
  }

  render() {
    switch (this.state.currentStep) {
      case 1:
        return <BookList updateFormData={this.updateFormData} />;
      case 2:
        return <ShippingDetails updateFormData={this.updateFormData} />;
      case 3:
        return <DeliveryDetails updateFormData={this.updateFormData} />;
      case 4:
        return (
          <Confirmation
            updateFormData={this.updateFormData}
            data={this.state.formValues}
          />
        );
      case 5:
        return <Success data={this.state.formValues} />;
      default:
        this.setState({ currentStep: 1 });
        return <BookList updateFormData={this.updateFormData} />;
    }
  }
}

class BookList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      books: [
        { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
        { id: 2, name: 'Monk who sold his Fearrary', author: 'RobinSharma' },
        { id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' },
      ],
      selectedBooks: [],
      error: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedBooks = this.handleSelectedBooks.bind(this);
    this._renderError = this._renderError.bind(this);
  }

  handleSelectedBooks(event) {
    let selectedBooks = [...this.state.selectedBooks];
    let foundIdx = selectedBooks.indexOf(event.target.value);

    if (foundIdx !== -1) {
      selectedBooks.splice(foundIdx, 1);
    } else {
      selectedBooks.push(event.target.value);
    }
    this.setState({ selectedBooks });
    console.log(selectedBooks);
  }

  _renderError() {
    if (this.state.error) {
      return <div className='alert alert-danger'>{this.state.error}</div>;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.selectedBooks.length === 0) {
      this.setState({ error: 'Please choose at least one book to continue' });
    } else {
      this.props.updateFormData({ selectedBooks: this.state.selectedBooks });
      this.setState({ error: null });
    }
  }

  render() {
    return (
      <div>
        <h3>BookList</h3>
        {this._renderError()}
        <form onSubmit={this.handleSubmit}>
          {this.state.books.map((book) => (
            <Item book={book} handleSelectedBooks={this.handleSelectedBooks} />
          ))}
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

function Item(props) {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          value={props.book.name}
          onChange={props.handleSelectedBooks}
        />
        {props.book.name} -- {props.book.author}
      </label>
    </div>
  );
}

export default Object.assign(BookStore, {
  BookList: Object.assign(BookList, { Item }),
  ShippingDetails,
  DeliveryDetails,
});
