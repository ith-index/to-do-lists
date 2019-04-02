
const ACTION_TO_DO_LIST_CREATE = 'ACTION_TO_DO_LIST_CREATE';

function createActionToDoListCreate(name, description) {
  return {
    type: ACTION_TO_DO_LIST_CREATE,
    name: name,
    description: description,
  };
}

function reduceToDoListCreate(state, action) {
  const id = state.length;
  const toDoList = {
    id: id,
    name: action.name,
    description: action.description,
    toDos: [],
    sortType: SortTypes.Date,
    filterType: FilterTypes.None,
  };
  return state.concat(toDoList);
}

/////

const ACTION_TO_DO_LIST_TOGGLE_EDIT = 'ACTION_TO_DO_LIST_TOGGLE_EDIT';

function createActionToDoListToggleEdit(toDoListID) {
  return {
    type: ACTION_TO_DO_LIST_TOGGLE_EDIT,
    toDoListID: toDoListID,
  }
}

function reduceToDoListToggleEdit(state, action) {
  return state.map(
    toDoList => toDoList.id === action.toDoListID
      ? Object.assign({}, toDoList, {isEditing: !toDoList.isEditing})
      : toDoList
  );
}


/////

const ACTION_TO_DO_LIST_DELETE = 'ACTION_TO_DO_LIST_DELETE';

function createActionToDoListDelete(id) {
  return {
    type: ACTION_TO_DO_LIST_DELETE,
    id: id,
  }
}

function reduceToDoListDelete(state, action) {
  return state.filter(
    toDoList => toDoList.id !== action.id
  );
}

/////

const FilterTypes = {
  None: 'None',
  Complete: 'Complete',
  Incomplete: 'Incomplete',
}

const ACTION_TO_DO_LIST_SET_FILTER_TYPE = 'ACTION_TO_DO_LIST_SET_FILTER_TYPE';

function createActionToDoListSetFilterType(toDoListID, filterType) {
  return {
    type: ACTION_TO_DO_LIST_SET_FILTER_TYPE,
    toDoListID: toDoListID,
    filterType: filterType,
  }
}

function reduceToDoListSetFilterType(state, action) {
  return state.map(
    toDoList => toDoList.id === action.toDoListID
      ? Object.assign({}, toDoList, {filterType: action.filterType})
      : toDoList
  );
}

/////

const SortTypes = {
  Date: 'Date',
  Name: 'Name',
}

const ACTION_TO_DO_LIST_SET_SORT_TYPE = 'ACTION_TO_DO_LIST_SET_SORT_TYPE';

function createActionToDoListSetSortType(toDoListID, sortType) {
  return {
    type: ACTION_TO_DO_LIST_SET_SORT_TYPE,
    toDoListID: toDoListID,
    sortType: sortType,
  }
}

function reduceToDoListSetSortType(state, action) {
  return state.map(
    toDoList => toDoList.id === action.toDoListID
      ? Object.assign({}, toDoList, {sortType: action.sortType})
      : toDoList
  );
}

/////

const ACTION_TO_DO_CREATE = 'ACTION_TO_DO_CREATE';

function createActionToDoCreate(toDoListID, name, description) {
  return {
    type: ACTION_TO_DO_CREATE,
    toDoListID: toDoListID,
    name: name,
    description: description,
  }
}

function reduceToDoCreate(state, action) {
  return state.map(
    toDoList => toDoList.id === action.toDoListID
      ? Object.assign({}, toDoList, { toDos: toDoList.toDos.concat({
          id: toDoList.toDos.length,
          name: action.name,
          description: action.description,
          isDone: false,
        })})
      : toDoList
  );
  
}

/////

const ACTION_TO_DO_DELETE = 'ACTION_TO_DO_DELETE';

function createActionToDoDelete(toDoListID, toDoID) {
  return {
    type: ACTION_TO_DO_DELETE,
    toDoListID: toDoListID,
    toDoID: toDoID,
  };
}

function reduceToDoDelete(state, action) {
  return state.map(
    toDoList => toDoList.id === action.toDoListID
      ? Object.assign({}, toDoList, { toDos: toDoList.toDos.filter(toDo => toDo.id !== action.toDoID)})
      : toDoList
  );
}

/////

const ACTION_TO_DO_TOGGLE_DONE = 'ACTION_TO_DO_TOGGLE_DONE';

function createActionToDoToggleDone(toDoListID, toDoID) {
  return {
    type: ACTION_TO_DO_TOGGLE_DONE,
    toDoListID: toDoListID,
    toDoID: toDoID,
  };
}

function reduceToDoToggleDone(state, action) {
  return state.map(
    toDoList => toDoList.id === action.toDoListID
      ? Object.assign({}, toDoList, { toDos: toDoList.toDos.map(
          toDo => toDo.id === action.toDoID
            ? Object.assign({}, toDo, { isDone: !toDo.isDone })
            : toDo
        )})
      : toDoList
  );
}

/////

const initialState = [
  {
    id: 0,
    name: 'Foo',
    description: 'Foo Foo Foo',
    toDos: [
      { id: 0, name: 'Foo 0', description: 'Foo 0 Foo 0 Foo 0', isDone: true, },
      { id: 1, name: 'Foo 1', description: 'Foo 1 Foo 1 Foo 1', isDone: true, },
      { id: 2, name: 'Foo 2', description: 'Foo 2 Foo 2 Foo 2', isDone: true, },
      { id: 3, name: 'Foo 3', description: 'Foo 3 Foo 3 Foo 3', isDone: false, },
      { id: 4, name: 'Foo 4', description: 'Foo 4 Foo 4 Foo 4', isDone: false, },
    ],
    sortType: SortTypes.Date,
    filterType: FilterTypes.None,
    isEditing: false,
  },
  {
    id: 1,
    name: 'Bar',
    description: 'Bar Bar Bar',
    toDos: [
      { id: 0, name: 'Bar 0', description: 'Bar 0 Bar 0 Bar 0', isDone: true, },
      { id: 1, name: 'Bar 1', description: 'Bar 1 Bar 1 Bar 1', isDone: false, },
      { id: 2, name: 'Bar 2', description: 'Bar 2 Bar 2 Bar 2', isDone: false, },
    ],
    sortType: SortTypes.Date,
    filterType: FilterTypes.None,
    isEditing: false,
  },
  {
    id: 2,
    name: 'Baz',
    description: 'Baz Baz Baz',
    toDos: [],
    sortType: SortTypes.Date,
    filterType: FilterTypes.None,
    isEditing: false,
  },
]

function toDoListsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TO_DO_LIST_CREATE: {
      return reduceToDoListCreate(state, action);
    }
    case ACTION_TO_DO_LIST_DELETE: {
      return reduceToDoListDelete(state, action);
    }
    case ACTION_TO_DO_TOGGLE_DONE: {
      return reduceToDoToggleDone(state, action);
    }
    case ACTION_TO_DO_LIST_SET_FILTER_TYPE: {
      return reduceToDoListSetFilterType(state, action);
    }
    case ACTION_TO_DO_LIST_SET_SORT_TYPE: {
      return reduceToDoListSetSortType(state, action);
    }
    case ACTION_TO_DO_CREATE: {
      return reduceToDoCreate(state, action);
    }
    case ACTION_TO_DO_LIST_TOGGLE_EDIT: {
      return reduceToDoListToggleEdit(state, action);
    }
    case ACTION_TO_DO_DELETE: {
      return reduceToDoDelete(state, action);
    }
    default: return state;
  }
}

export {
  createActionToDoListCreate,
  createActionToDoListDelete,
  createActionToDoToggleDone,
  createActionToDoCreate,
  createActionToDoListSetFilterType,
  createActionToDoListSetSortType,
  createActionToDoListToggleEdit,
  createActionToDoDelete,
  FilterTypes, SortTypes,
  toDoListsReducer,
};
