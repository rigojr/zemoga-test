import React from 'react';
import { formatDistance } from 'date-fns';
import { IPoll } from '../../common/type';
import ThumbBox from '../ThumbBox';
import Vote, { IVoteProps } from '../../containers/Vote';

import './styles.scss';

export interface IPollListCardProps {
  poll: IPoll;
}

/**
 * Presentational component focuses to show the Poll Card when the list option is selected.
 */
const PollListCard: React.FC<IPollListCardProps> = ({ poll }) => {
  const { votes, picture, name, description, lastUpdated } = poll;
  const { positive, negative } = votes;
  const date = formatDistance(new Date(), Date.parse(lastUpdated));
  const positivePercentage = (positive * 100) / (positive + negative);
  const positiveGaugeWidth = positivePercentage > 90 ? 90 : positivePercentage;

  const voteProps: IVoteProps = {
    poll,
    date,
  };

  return (
    <div
      className="overlay-container"
      style={{
        backgroundImage: `url(${picture})`,
      }}
    >
      <div className="list-container">
        <div className="list-container__upper-content">
          <div className="upper-content__vote-win">
            <ThumbBox isPositive={positive > negative} />
          </div>
          <div className="upper-content__summary">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className="upper-content__side-actions">
            <Vote {...voteProps} />
          </div>
        </div>
        <div className="list-container__gauge-bar">
          <div className="gauge-bar__positive" style={{ width: `${positiveGaugeWidth}%` }}>
            <ThumbBox isPositive bgType="withoutBg" />
            <p>{positivePercentage.toFixed(1)}%</p>
          </div>
          <div className="gauge-bar__negative" style={{ width: `${100 - positiveGaugeWidth}%` }}>
            <ThumbBox isPositive={false} bgType="withoutBg" />
            <p>{(100 - positivePercentage).toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollListCard;
