// src/redux/actions.js

import axios from 'axios';

export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,
});

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/random_greeting'); // Update this URL
    dispatch(setGreeting(response.data.greeting));
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};