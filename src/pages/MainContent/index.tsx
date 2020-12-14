import React from 'react';

import { Main } from './styles';

import ContentHeader from '../../components/ContentHeader';
import ServerInfo from '../../components/ServerInfo';

const Dashboard: React.FC = () => {
  return (
    <Main>
      <header>
        <ContentHeader />
      </header>
      <ServerInfo />

    </Main>
  );
};

export default Dashboard;