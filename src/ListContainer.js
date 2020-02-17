import React from 'react';
import ListItem from './ListItem';

export default class ListContainer extends React.Component {
  render() {
    const allItems = this.props.todoItems.map(function(task, index) {
      return <ListItem taskName={task} key={index} />;
    });

    return (
      <ul>
        {allItems}
      </ul>
    );
  }
}