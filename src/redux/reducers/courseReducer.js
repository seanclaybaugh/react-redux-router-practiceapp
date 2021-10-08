export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, {...action.course}];
    default:
      return state;
  }
}

// A reducer is a function that accepts state and action and returns a new state

//decide how to initialize state here!

//whatever is returned here becomes the new state for the action

//always need a default

//each reducer handles a "slice" of state