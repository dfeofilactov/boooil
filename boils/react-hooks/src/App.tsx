import React from 'react';
import '~/sass/main.sass';
import { BrowserRouter } from 'react-router-dom';
import Layout from '~/layout/Layout';
import Routes from '~/pages/Routes';

const App: React.FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
