// import * as types from './constants';
// import fetch from 'isomorphic-fetch';

// const headers = {
//   'Content-Type': 'application/json'
// };

// export const fetchCars = (page) => {
//   if (page == null) {
//     page = `${types.API_URL}cars?_limit=10&_page=1`;
//   }
//   return fetch(`${page}`, {'credentials':'include', 'headers':headers })
//     .then(response => {
//        return response.json();
//     });
// };