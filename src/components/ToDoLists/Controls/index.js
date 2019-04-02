import React from 'react';
import { connect } from 'react-redux';
import { SortTypes, createActionUpdateToDoListsSortType } from '../../../state/toDoListsSortTypeUpdateReducer.js'
import { createActionEditToggleToDoLists } from '../../../state/toDoListsEditToggleReducer.js'
import './index.css';

const Controls = (props) =>
  <div className='controls'>
    <div className='sort'>
      <label>Sort By:</label>
      <label>Date</label>
      <input 
        type='radio' 
        name='sort-type' 
        checked={props.sortType === SortTypes.Date} 
        onChange={_ => props.updateSortType(SortTypes.Date)}
        /> 
      <label>Name</label>
      <input 
        type='radio' 
        name='sort-type' 
        checked={props.sortType === SortTypes.Name} 
        onChange={_ => props.updateSortType(SortTypes.Name)}
        /> 
    </div>
    <button 
      className='edit'
      onClick={props.toggleEdit}
      >
      { props.isEditing ? 'Done' : 'Edit' }
    </button>
  </div>
  ;

export default connect(
  state => {
    return {
      sortType: state.toDoListsSortType,
      isEditing: state.isEditingToDoLists,
    }
  },
  dispatch => {
    return {
      updateSortType: sortType => dispatch(createActionUpdateToDoListsSortType(sortType)),
      toggleEdit: _ => dispatch(createActionEditToggleToDoLists()),
    }
  }
)(Controls);
