import React, { ReactElement } from 'react';

interface IInnerHocProps {
  children: ReactElement | ReactElement[];
  option: string;
}

const InnerHoc: React.FC<IInnerHocProps> = ({ children, option }) => {
  if (option === 'grid') return <div className="upper-content__inner-section">{children}</div>;
  return <>{children}</>;
};

export default InnerHoc;
