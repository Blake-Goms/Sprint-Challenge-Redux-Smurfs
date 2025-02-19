import { FETCHING, SUCCESS, FAILURE } from "../actions";
/*
  Be sure to import in all of the action types from `../actions`
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
      }
    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;