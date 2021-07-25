import { createSlice } from '@reduxjs/toolkit';
import { IPoll } from '../../common/types';

interface PollsState {
  polls: IPoll[];
  loading: boolean;
  error: string;
}

const initialState: PollsState = {
  polls: [],
  loading: false,
  error: '',
};

/**
 * In this reducer file, it is managing all the state-related logic with redux toolkit.
 * The idea is to have a single and easy place to read, in order to handle all state,
 * in this case: the Polls state.
 */

const pollsSlice = createSlice({
  name: 'Polls',
  initialState,
  reducers: {
    // GET
    getPolls: state => {
      state.loading = true;
      state.error = '';
    },
    getPollsSuccess: (state, { payload }) => {
      const { polls } = payload;
      state.loading = false;
      state.error = '';
      state.polls = polls;
    },
    getPollsFailed: (state, { payload }) => {
      const { errorMessage } = payload;
      state.loading = false;
      state.error = errorMessage;
    },
    // VOTE
    pollUpdate: (state, { payload }) => {
      const { updatedPolls } = payload;
      state.polls = updatedPolls;
    },
  },
});

export const pollsSelector = (state: { poll: PollsState }) => state.poll;

export const { getPolls, getPollsSuccess, getPollsFailed, pollUpdate } = pollsSlice.actions;

export default pollsSlice.reducer;
