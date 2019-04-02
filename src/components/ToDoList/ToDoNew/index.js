import React, { Component } from 'react';
import './index.css';

export default class ToDoNew extends Component {
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
        className='to-do-new'
        onSubmit={event => {
          this.props.create(this.state.name, this.state.description) 
          event.preventDefault();
        }}
        >
        <input
          className='name'
          type='text'
          placeholder='Name'
          value={this.state.name}
          onChange={event => this.setState({name: event.target.value})}
        />
        <input
          className='description'
          type='text'
          placeholder='Description'
          value={this.state.description}
          onChange={event => this.setState({description: event.target.value})}
        />
        <input
          className='submit'
          type='submit'
          value='Create'
        />
      </form>
    );
  }
}

