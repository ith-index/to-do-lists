import React from 'react';
import { connect } from 'react-redux';
import ToDoListNew from './ToDoListNew';
import ToDoListItem from './ToDoListItem';
import Controls from './Controls';
import { SortTypes } from '../../state/toDoListsSortTypeUpdateReducer.js'
import './index.css';

const ToDoLists = (props) => {
  let sortedToDoLists = props.toDoLists.slice();
  if (props.toDoListsSortType === SortTypes.Name) {
    sortedToDoLists.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }); 
  }
  return (
    <div>
      <Controls />
      <ToDoListNew />
      <div className='to-do-lists'>
        {
          sortedToDoLists.map(
            toDoList => <ToDoListItem id={toDoList.id}  name={toDoList.name} description={toDoList.description} toDos={toDoList.toDos} isEditing={props.isEditing}/>
          )
        }
      </div>
    </div>
  );
}

export default connect(
  state => {
    return { 
      toDoLists: state.toDoLists,
      toDoListsSortType: state.toDoListsSortType,
      isEditing: state.isEditingToDoLists,
    };
  }
)(ToDoLists);
