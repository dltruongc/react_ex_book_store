import ReactDOM from 'react-dom';
import {Component} from "react";
import BookStore from "./BookStore";

class InputExample extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {name: 'React'}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value.toUpperCase() })
  }

  render() {
    return (<input type="text" value={this.state.name} onChange={this.handleChange}/>)
  }
}

ReactDOM.render(<BookStore/>, document.getElementById('root'))