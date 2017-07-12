import { SET_DATA } from '../actions';

export default function testCrud(state = [], action = {}) {
  switch (action.type) {
    case SET_DATA:
      return action.data;
    default: return state;
  }
}
