const SortTypes = {
  Date: 'Date',
  Name: 'Name',
}

const ACTION_TO_DO_LISTS_SORT_TYPE_UPDATE = 'ACTION_TO_DO_LISTS_SORT_TYPE_UPDATE';

function createActionUpdateToDoListsSortType(sortType) {
  return {
    type: ACTION_TO_DO_LISTS_SORT_TYPE_UPDATE,
    sortType: sortType,
  }
}

function toDoListsSortTypeUpdateReducer(state = SortTypes.Date, action) {
  switch (action.type) {
    case ACTION_TO_DO_LISTS_SORT_TYPE_UPDATE: {
      return action.sortType;
    }
    default: return state;
  }
}

export { SortTypes, createActionUpdateToDoListsSortType, toDoListsSortTypeUpdateReducer };
