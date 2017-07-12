import { combineReducers } from 'redux';
import content from './contentReducer';
import testCrud from './testCrudReducer';
import state from './stateReducer';

export default combineReducers({
  content,
  testCrud,
  state,
});
