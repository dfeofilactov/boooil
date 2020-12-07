import React from 'react';
import Routes from '~/pages/Routes';

const Home: React.FC = () => {
  console.log(Routes);
  return (
    <div className="Home">
      <p className="description">Your app here...</p>
    </div>
  );
};

export default Home;
