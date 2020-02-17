import React from 'react';
import ListContainer from './ListContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: [
        'Build a todo App',
        'Go home and plan to take over the world!',
        'Make a list of stuff to do',
        'Have some Ice Cream! :)',
      ],
      newItem: 'Test New Item',
    };
  }

  addItem = (e) => {
    e.preventDefault();
    console.log('Add Item!');

    this.setState({
      toDoItems: [...this.state.toDoItems, this.state.newItem],
      newItem: ''
    });
  }

  onTextBoxChange = (e) => {
    console.log('On Text Change', e.target.value);

    this.setState({
      newItem: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Things I Should Start Doing:</h1>
        <ListContainer todoItems={this.state.toDoItems} />
        <hr />
        <form>
          <input type="text"
                 placeholder="Type an Item Here!"
                 value={this.state.newItem}
                 onChange={this.onTextBoxChange}
                 />
          <button onClick={this.addItem}>Add Item!</button>
        </form>
      </div>
    );
  }
}

/*
How the Text Box Works:

state = { newItem: '' }

TextBoX attr => Value => this.state.newItem

            e.target.value
TextBox onChange => setState({ newItem: 'moo' })

TextBox value => Test
*/