import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPoll, IVotes } from '../../common/types';
import VoteInfo, { IVoteInfo } from '../../components/VoteInfo';
import { pollsSelector } from '../../redux/reducers/pollReducer';
import { votePollService } from '../../services/pollsService';

export interface IVoteProps {
  poll: IPoll;
  date: string;
}

/**
 * Vote container is focused on handling all the logic, services request and presentational components.
 */
const Vote: React.FC<IVoteProps> = ({ poll, date }) => {
  const { category, votes } = poll;
  const [isAgain, setIsAgain] = useState(false);
  const [message, setMessage] = useState('');
  const { polls } = useSelector(pollsSelector);
  const dispatch = useDispatch();

  const updateVotes = (option: string): IVotes => {
    if (option === 'isPositive') return { ...votes, positive: votes.positive + 1 };
    return { ...votes, negative: votes.negative + 1 };
  };

  const callBackInfo = (success: boolean) => {
    setIsAgain(prev => !prev);
    if (success) setMessage('Thank you for your vote!');
    else setMessage('Error emitting vote!');
  };

  const handlerVote = (option: string) => {
    if (option === '') {
      setIsAgain(prev => !prev);
    } else {
      setMessage('Loading...');
      const pollToVote: IPoll = {
        ...poll,
        votes: updateVotes(option),
      };
      dispatch(votePollService(pollToVote, polls, callBackInfo));
    }
  };

  const voteInfoProps: IVoteInfo = {
    date,
    isAgain,
    category,
    onVote: handlerVote,
    messageVote: message,
  };
  return <VoteInfo {...voteInfoProps} />;
};

export default Vote;
