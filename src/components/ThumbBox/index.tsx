import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import './styles.scss';

type bgTypes = 'green' | 'yellow' | 'withoutBg';

interface IThumbBox {
  isPositive: boolean;
  bgType?: bgTypes;
}

/**
 * Presentational component focuses to show a re-usable box with thumbs up or down, with background or not.
 */

const ThumbBox: React.FC<IThumbBox> = ({
  isPositive,
  bgType = isPositive ? 'green' : 'yellow',
}) => {
  return (
    <div className={`thumb-container thumb-container--${bgType}`}>
      {isPositive ? <FaThumbsUp color="white" /> : <FaThumbsDown color="white" />}
    </div>
  );
};

export default ThumbBox;
