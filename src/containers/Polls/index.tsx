import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPollsService } from '../../services/pollsService';
import { pollsSelector } from '../../redux/reducers/pollReducer';
import Spinner from '../../components/Spinner';
import './styles.scss';
import Dropdown, { IDropdownProps } from '../../components/Dropdown';
import PollListCard from '../../components/PollListCard';

const availableOptions = ['List', 'Grid'];

/**
 * Polls container is focused on handling all the logic, services request and presentational components.
 */
const Polls: React.FC = () => {
  const dispatch = useDispatch();
  const { polls, loading, error } = useSelector(pollsSelector);
  const [optionSelected, setOptionSelected] = useState(availableOptions[0]);

  useEffect(() => {
    dispatch(getPollsService());
  }, [dispatch]);

  const dropdownProps: IDropdownProps = {
    setOptionSelected,
    optionSelected,
    availableOptions,
  };

  if (loading)
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );

  if (error !== '')
    return (
      <div className="error-container">
        <h1 className="error-container__title">
          We are sorry, it looks like something went really wrong :(
        </h1>
        <p className="error-container__error">{error}</p>
      </div>
    );

  return (
    <div className="polls-container">
      <div className="polls-container__header-rulings">
        <h1 className="header-rulings__title">Previous Rulings</h1>
        <Dropdown {...dropdownProps} />
      </div>
      <div className="polls-container__card-container">
        {polls.map(poll => (
          <PollListCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
};

export default Polls;
