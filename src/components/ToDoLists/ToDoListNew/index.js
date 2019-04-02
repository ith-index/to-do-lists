import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createActionToDoListCreate } from '../../../state/toDoListsReducer.js';
import './index.css';

class ToDoListNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    }
  }

  render() {
    return (
      <form 
        className='to-do-list-new'
        onSubmit={
          event => {
            this.props.createToDoList(this.state.name, this.state.description)
            this.setState({
              name: '', description: '',
            });
            event.preventDefault();
          }
        } 
      >
        <input className='name' type='text' placeholder='Name' value={this.state.name} onChange={event => this.setState({name: event.target.value})} />
        <input className='description' type='text' placeholder='Description' value={this.state.description} onChange={event => this.setState({description: event.target.value})} />
        <input className='submit' type="submit" value="Create" />
      </form>
    );
  }
}

export default connect(null, (dispatch) => {
  return {createToDoList: (name, description) => dispatch(createActionToDoListCreate(name, description))};
})(ToDoListNew);
