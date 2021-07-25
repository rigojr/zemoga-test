import React, { useState } from 'react';
import ThumbBox from '../ThumbBox';

import './styles.scss';

export interface IVoteInfo {
  isAgain: boolean;
  date: string;
  category: string;
  onVote: (option: string) => void;
  messageVote: string;
}

/**
 * Presentational component focuses to show time and actions to start voting.
 */
const VoteInfo: React.FC<IVoteInfo> = ({ isAgain, date, category, onVote, messageVote }) => {
  const [voteOption, setVoteOption] = useState('');

  const onHandlerVote = () => {
    onVote(voteOption);
    setVoteOption('');
  };

  return (
    <div className="vote-info">
      <div className="vote-info__time-info">
        <p>
          {isAgain || messageVote === 'Loading...' ? (
            messageVote
          ) : (
            <>
              {date} ago in <span>{category}</span>
            </>
          )}
        </p>
      </div>
      <div className="vote-info__vote-actions">
        {!isAgain && (
          <>
            <div
              className={`vote-actions__vote-option ${
                voteOption === 'isPositive' ? 'vote-actions__vote-option--selected' : ''
              }`}
              onClick={() => setVoteOption('isPositive')}
            >
              <ThumbBox isPositive />
            </div>
            <div
              className={`vote-actions__vote-option ${
                voteOption === 'isNegative' ? 'vote-actions__vote-option--selected' : ''
              }`}
              onClick={() => setVoteOption('isNegative')}
            >
              <ThumbBox isPositive={false} />
            </div>
          </>
        )}
        {isAgain ? (
          <button className={`vote-actions__vote-dispatch`} onClick={onHandlerVote}>
            Vote Again
          </button>
        ) : (
          <button
            disabled={voteOption === ''}
            className={`vote-actions__vote-dispatch ${
              voteOption === '' ? 'vote-actions__vote-dispatch--disabled' : ''
            }`}
            onClick={onHandlerVote}
          >
            Vote Now
          </button>
        )}
      </div>
    </div>
  );
};

export default VoteInfo;
