export const SET_DATA = 'SET_DATA';

export function setData(data) {
  return {
    type: SET_DATA,
    data,
  };
}

export function fetchData() {
  return (dispatch) => {
    fetch('https://uinames.com/api/?amount=10')
      .then(res => res.json())
      .then(data => dispatch(setData(data)));
  };
}
