import React from 'react';
import { connect } from 'react-redux';
import ToDoNew from './ToDoNew';
import ToDoListControls from './ToDoListControls';
import ToDoItem from './ToDoItem';
import { FilterTypes, SortTypes, createActionToDoDelete, createActionToDoListToggleEdit, createActionToDoCreate, createActionToDoListSetFilterType, createActionToDoListSetSortType, createActionToDoToggleDone } from '../../state/toDoListsReducer.js';
import './index.css';

const ToDoList = (props) => {
  const toDoListID= parseInt(props.match.params.toDoListID)
  const toDoList = props.toDoLists.find(
    (toDoList) => toDoList.id === toDoListID
  );
  let filter = (toDo) => true;
  if (toDoList.filterType === FilterTypes.Complete) {
    filter = (toDo) => toDo.isDone;
  } else if (toDoList.filterType === FilterTypes.Incomplete) {
    filter = (toDo) => !toDo.isDone;
  }
  let sort = (toDo1, toDo2) => 0;
  if (toDoList.sortType === SortTypes.Date) {
    sort = (toDo1, toDo2) => toDo1.id < toDo2.id;
  } else if (toDoList.sortType === SortTypes.Name) {
    sort = (toDo1, toDo2) => {
      if (toDo1.name < toDo2.name) {
        return -1;
      }
      if (toDo1.name > toDo2.name) {
        return 1;
      }
      return 0
    }
  }
  const toDos = toDoList.toDos.filter(filter).sort(sort);
  return (
    <div className='to-do-list'>
      <h1 className='name'>{toDoList.name}</h1>
      <ToDoListControls 
        filterType={toDoList.filterType}
        sortType={toDoList.sortType}
        isEditing={toDoList.isEditing}
        setFilterType={filterType => props.setFilterType(toDoList.id, filterType)}
        setSortType={sortType=> props.setSortType(toDoList.id, sortType)}
        toggleEdit={_ => props.toggleEdit(toDoList.id)}
        />
      <ToDoNew create={(name, description) => props.create(toDoList.id, name, description)} />
      <div className='to-dos'>
        {
          toDos.map(
            toDo => 
              <ToDoItem id={toDo.id} name={toDo.name} description={toDo.description} isDone={toDo.isDone} isEditing={toDoList.isEditing}
                toggleDone={_ => props.toggleDone(toDoListID, toDo.id)}
                deleteToDo={_ => props.delete(toDoListID, toDo.id)}
              />
          )
        }
      </div>
    </div>
  )
};

export default connect(
  state => {
    return { toDoLists: state.toDoLists };
  },
  dispatch => {
    return {
      create: (toDoListID, name, description) => dispatch(createActionToDoCreate(toDoListID, name, description)),
      delete: (toDoListID, toDoID) => dispatch(createActionToDoDelete(toDoListID, toDoID)),
      setFilterType: (toDoListID, filterType) => dispatch(createActionToDoListSetFilterType(toDoListID, filterType)),
      setSortType: (toDoListID, sortType) => dispatch(createActionToDoListSetSortType(toDoListID, sortType)),
      toggleDone: (toDoListID, toDoID) => dispatch(createActionToDoToggleDone(toDoListID, toDoID)),
      toggleEdit: (toDoListID) => dispatch(createActionToDoListToggleEdit(toDoListID)),
    }
  }
)(ToDoList);
