import { combineReducers } from 'redux';
import state from './stateReducer';
import content from './contentReducer';

export default combineReducers({
  state,
  content,
});
