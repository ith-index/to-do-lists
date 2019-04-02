import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createActionToDoListDelete } from '../../../state/toDoListsReducer.js';
import './index.css';

class ToDoList extends Component { constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  render() {
    if (this.state.redirect) {
        return <Redirect push to={'/to-do-list/' + this.props.id.toString()} />;
    }
    return (
      <div 
        className='to-do-list-item'
        >
        <div className='name-description'>
          <p className='name'>{this.props.name}</p>
          <p className='description'>{this.props.description}</p>
        </div>
        <div className='count'>
          <span>{this.props.toDos.filter(toDo => toDo.isDone).length}</span>
          <span> / </span>
          <span>{this.props.toDos.length}</span>
        </div>
        {
          this.props.isEditing ? 
            <div className='delete' onClick={_ => this.props.delete(this.props.id)}>x</div> 
            : 
            <button className='show' onClick={_ => this.setState({redirect: true})}>Show</button>
        }
      </div>
    );
  }
}

export default connect(
  null, dispatch => {
    return {
      delete: id => dispatch(createActionToDoListDelete(id))
    }
  }
)(ToDoList);
