import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ToDoLists from './components/ToDoLists';
import ToDoList from './components/ToDoList';
import FourZeroFour from './components/404';
import store from './state/store.js';
import './App.css';

export default (props) =>  
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <header className='header'>
          <Link className='home' to='/'>To-Do Lists</Link>
        </header>
        <main className='main'>
          <Switch>
            <Route path='/' exact component={ToDoLists} />
            <Route path='/to-do-list/:toDoListID' component={ToDoList} />
            <Route component={FourZeroFour} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
  ;
