import axios from '../axios-config';
import { Dispatch } from '@reduxjs/toolkit';
import {
  getPolls,
  getPollsSuccess,
  getPollsFailed,
  pollUpdate,
} from '../redux/reducers/pollReducer';
import { IPoll } from '../common/types';

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
      dispatch(
        getPollsFailed({ errorMessage: err.message || 'Error getting polls from firebase' }),
      );
    });
};

export const votePollService =
  (pollToVote: IPoll, polls: IPoll[], cb: (success: boolean) => void) => (dispatch: Dispatch) => {
    const { id, votes } = pollToVote;
    axios
      .patch(`data/${id}/votes/.json`, votes)
      .then(res => {
        const pollIndex = polls.findIndex(poll => poll.id === id);
        const pollToVoteUpdate = {
          ...pollToVote,
          votes: res.data,
        };
        const updatedPolls = [
          ...polls.slice(0, pollIndex),
          pollToVoteUpdate,
          ...polls.slice(pollIndex + 1),
        ];
        cb(true);
        dispatch(pollUpdate({ updatedPolls }));
      })
      .catch(() => {
        cb(false);
      });
  };
