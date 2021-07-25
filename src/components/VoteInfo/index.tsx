import React from 'react';
import ThumbBox from '../ThumbBox';

import './styles.scss';

export interface IVoteInfo {
  isAgain: boolean;
  date: string;
  category: string;
}

/**
 * Presentational component focuses to show time and actions to start voting.
 */

const VoteInfo: React.FC<IVoteInfo> = ({ isAgain, date, category }) => {
  return (
    <div className="vote-info">
      <div className="vote-info__time-info">
        <p>
          {isAgain ? (
            'Thank you for your vote!'
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
            <div className="vote-actions__vote-option">
              <ThumbBox isPositive />
            </div>
            <div className="vote-actions__vote-option">
              <ThumbBox isPositive={false} />
            </div>
          </>
        )}
        <button className="vote-actions__vote-dispatch">
          {isAgain ? 'Vote Again' : 'Vote Now'}
        </button>
      </div>
    </div>
  );
};

export default VoteInfo;
