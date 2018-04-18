import React from 'react';

import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';

import './Home.css'

const Home = (props) => {
    return (
        <div>
          <HomeHeader />
          <HomeBody idolList={props.idolList}/>
        </div>
    );
};

export default Home;