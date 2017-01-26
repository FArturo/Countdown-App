import React , { Component } from 'react';
import '../styles.css';
import { Form, FormControl, Button} from 'react-bootstrap'

import Clock from './clock';

class App extends Component  {

  constructor(props) {
    super(props);
    this.state = { deadline: 'December 31, 2017'}
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return(
      <div className="App">
        <h1 className="App-tile">Countdown to {this.state.deadline}</h1>
        <Clock
          deadline={this.state.deadline}/>
        <Form inline>
          <FormControl
            className="deadline-input"
            placeholder="new date..."
            onChange={ e => this.setState({ newDeadline: e.target.value})}/>
          <Button onClick={this.changeDeadline.bind(this)}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
