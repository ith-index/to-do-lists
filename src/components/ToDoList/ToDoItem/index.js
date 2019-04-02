import React from 'react';
import './index.css';

export default (props) =>
  <div className='to-do-item'>
    <div className='name-description'>
      <span className='name'>{props.name}</span>
      <span>{props.description}</span>
    </div>
    <input 
      className='checkbox' 
      type='checkbox' 
      checked={props.isDone}
      onChange={_ => props.toggleDone()}
      />
    { props.isEditing ? <div className='delete' onClick={props.deleteToDo}>X</div> : null }
  </div>
  ;

