const ACTION_EDIT_TOGGLE_TO_DO_LISTS = 'ACTION_EDIT_TOGGLE_TO_DO_LISTS';

function createActionEditToggleToDoLists() {
  return {
    type: ACTION_EDIT_TOGGLE_TO_DO_LISTS 
  }
}

function toDoListsEditToggleReducer(state = false, action) {
  if (action.type === ACTION_EDIT_TOGGLE_TO_DO_LISTS) {
    return !state;
  }
  return state;
}

export { ACTION_EDIT_TOGGLE_TO_DO_LISTS, createActionEditToggleToDoLists, toDoListsEditToggleReducer, };
