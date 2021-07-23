import axios from '../axios-config';
import { Dispatch } from '@reduxjs/toolkit';
import { getPolls, getPollsSuccess, getPollsFailed } from '../redux/reducers/pollReducer';

/**
 * This service is focus on get all the available polls in Firebase,
 * it receives an arrow function that return a dispatch that is use to
 * trigger the required actions.
 * In case of fail, this service will dispatch a related error action.
 */
export const getPollsService = () => (dispatch: Dispatch) => {
  dispatch(getPolls());
  axios
    .get('/data.json')
    .then(res => {
      dispatch(getPollsSuccess({ polls: res.data }));
    })
    .catch(err => {
      dispatch(getPollsFailed({ errorMessage: err.message || 'Error getting polls from firebase' }));
    });
};
