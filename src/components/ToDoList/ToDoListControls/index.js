import React from 'react';
import { FilterTypes, SortTypes } from '../../../state/toDoListsReducer.js';
import './index.css';

export default (props) =>
  <div className='to-do-list-controls'>
    <div className='filter'>
      <label className='label-filter'>Filter:</label>
      <div>
        <label>None</label>
        <input
          type='radio'
          name='filter'
          checked={props.filterType === FilterTypes.None}
          onChange={_ => props.setFilterType(FilterTypes.None)}
        />
      </div>
      <div>
        <label>Complete</label>
        <input
          type='radio'
          name='filter'
          checked={props.filterType === FilterTypes.Complete}
          onChange={_ => props.setFilterType(FilterTypes.Complete)}
        />
      </div>
      <div>
        <label>Incomplete</label>
        <input
          type='radio'
          name='filter'
          checked={props.filterType === FilterTypes.Incomplete}
          onChange={_ => props.setFilterType(FilterTypes.Incomplete)}
        />
      </div>
    </div>
    <div className='sort'>
      <label className='label-sort'>Sort By:</label>
      <div>
        <label>Date</label>
        <input
          type='radio'
          name='sortType'
          checked={props.sortType === SortTypes.Date}
          onChange={_ => props.setSortType(SortTypes.Date)}
        />
      </div>
      <div>
        <label>Name</label>
        <input
          type='radio'
          name='SortType'
          checked={props.sortType === SortTypes.Name}
          onChange={_ => props.setSortType(SortTypes.Name)}
        />
      </div>
    </div>
    <button
      className='edit'
      onClick={props.toggleEdit}
    >
      { props.isEditing ? 'Done' : 'Edit' }
    </button>
  </div>
  ;
