import React from 'react';
import { formatDistance } from 'date-fns';
import { IPoll } from '../../common/type';
import ThumbBox from '../ThumbBox';
import Vote, { IVoteProps } from '../../containers/Vote';
import './styles.scss';
import InnerHoc from '../../hoc/InnerHoc';
import { stringFormatter } from '../../common/utils';

export interface IPollCardProps {
  poll: IPoll;
  option: string;
}

/**
 * Presentational component focuses to show the Poll Card when the list option is selected.
 */
const PollCard: React.FC<IPollCardProps> = ({ poll, option }) => {
  const { votes, picture, name, description, lastUpdated } = poll;
  const { positive, negative } = votes;
  const date = formatDistance(new Date(), Date.parse(lastUpdated));
  const positivePercentage = (positive * 100) / (positive + negative);
  const positiveGaugeWidth = positivePercentage > 90 ? 90 : positivePercentage;

  const voteProps: IVoteProps = {
    poll,
    date,
  };

  const formattedName = stringFormatter(name, option === 'grid' ? 20 : 40);
  const formattedDesc = stringFormatter(description, option === 'grid' ? 50 : 120);

  return (
    <div
      className={`overlay-container overlay-container--${option}`}
      style={{
        backgroundImage: `url(${picture})`,
      }}
    >
      <div className={`list-container list-container--${option}`}>
        <div className={`list-container__upper-content list-container__upper-content--${option}`}>
          <InnerHoc option={option}>
            <div className="upper-content__vote-win">
              <ThumbBox isPositive={positive > negative} isReducer={option === 'grid'} />
            </div>
            <div className={`upper-content__summary upper-content__summary--${option}`}>
              <h2>{formattedName}</h2>
              <p>{formattedDesc}</p>
            </div>
          </InnerHoc>
          <div className={`upper-content__side-actions upper-content__side-actions--${option}`}>
            <Vote {...voteProps} />
          </div>
        </div>
        <div className="list-container__gauge-bar">
          <div
            className={`gauge-bar__positive gauge-bar__positive--${option}`}
            style={{ width: `${positiveGaugeWidth}%` }}
          >
            <ThumbBox isPositive bgType="withoutBg" isReducer={option === 'grid'} />
            <p>{positivePercentage.toFixed(1)}%</p>
          </div>
          <div
            className={`gauge-bar__negative gauge-bar__negative--${option}`}
            style={{ width: `${100 - positiveGaugeWidth}%` }}
          >
            <ThumbBox isPositive={false} bgType="withoutBg" isReducer={option === 'grid'} />
            <p>{(100 - positivePercentage).toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollCard;
