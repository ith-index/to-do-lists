import { combineReducers } from 'redux';
import { toDoListsReducer } from './toDoListsReducer.js';
import { toDoListsEditToggleReducer } from './toDoListsEditToggleReducer.js';
import { toDoListsSortTypeUpdateReducer } from './toDoListsSortTypeUpdateReducer.js';

export default combineReducers({
  isEditingToDoLists: toDoListsEditToggleReducer, 
  toDoLists: toDoListsReducer,
  toDoListsSortType: toDoListsSortTypeUpdateReducer
});
