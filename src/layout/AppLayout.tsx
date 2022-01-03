import React from 'react';

import { MainWrapper } from './AppLayout.styles';

const AppLayout: React.FC = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default AppLayout;
