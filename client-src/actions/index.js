export const SET_DATA = 'SET_DATA';

export function setData(data) {
  return {
    type: SET_DATA,
    data,
  };
}

// function handleResponse(response) {
//   if (response.ok) {
//     return response.json();
//   } else {
//     const error = new Error(response.statusText);
//     error.response = response;
//     throw error;
//   }
// }

// export function saveData(data) {
//   return (dispatch) => {
//     fetch('https://uinames.com/api/?amount=10', {
//       method: 'post',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }).then(handleResponse);
//   };
// }

export function fetchData() {
  return (dispatch) => {
    fetch('https://uinames.com/api/?amount=10')
      .then(res => res.json())
      .then(data => dispatch(setData(data)));
  };
}
