import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import './styles.scss';

type bgTypes = 'green' | 'yellow' | 'withoutBg';

interface IThumbBox {
  isPositive: boolean;
  isReducer?: boolean;
  bgType?: bgTypes;
}

/**
 * Presentational component focuses to show a re-usable box with thumbs up or down, with background or not.
 */
const ThumbBox: React.FC<IThumbBox> = ({
  isPositive,
  bgType = isPositive ? 'green' : 'yellow',
  isReducer = false,
}) => {
  const iconProps = {
    color: 'white',
    size: isReducer ? '0.8em' : '1em',
  };

  return (
    <div className={`thumb-container thumb-container--${bgType}`}>
      {isPositive ? <FaThumbsUp {...iconProps} /> : <FaThumbsDown {...iconProps} />}
    </div>
  );
};

export default ThumbBox;
