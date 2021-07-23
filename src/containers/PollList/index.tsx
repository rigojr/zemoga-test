import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPollsService } from '../../services/pollsService';
import { pollsSelector } from '../../redux/reducers/pollReducer';
import { v4 as uuidv4 } from 'uuid';

const PollList: React.FC = () => {
  const dispatch = useDispatch();
  const { polls, loading, error } = useSelector(pollsSelector);

  useEffect(() => {
    dispatch(getPollsService());
  }, [dispatch]);

  return <>{polls.length > 0 && polls.map(poll => <p key={uuidv4()}>{poll.name}</p>)}</>;
};

export default PollList;
