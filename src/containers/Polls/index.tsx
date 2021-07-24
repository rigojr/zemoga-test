import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPollsService } from '../../services/pollsService';
import { pollsSelector } from '../../redux/reducers/pollReducer';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../../components/Spinner';
import './styles.scss';

/**
 * Polls container is focused on handling all the logic, services request and presentational components.
 */
const Polls: React.FC = () => {
  const dispatch = useDispatch();
  const { polls, loading, error } = useSelector(pollsSelector);

  useEffect(() => {
    dispatch(getPollsService());
  }, [dispatch]);

  if (loading)
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );

  if (error !== '')
    return (
      <div className="error-container">
        <h1 className="error-container__title">We are sorry, it looks like something went really wrong :(</h1>
        <p className="error-container__error">{error}</p>
      </div>
    );

  return <>{polls.length > 0 && polls.map(poll => <p key={uuidv4()}>{poll.name}</p>)}</>;
};

export default Polls;
