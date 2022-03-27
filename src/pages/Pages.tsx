import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ROUTE } from '../utils/routes';
import Home from './home/Home';
import HomeLocationList from './home/HomeLocationList';
import HomeMap from './home/HomeMap';

const Pages: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path={ROUTE.MAP} element={<HomeMap />} />
          <Route path={ROUTE.LOCATIONS} element={<HomeLocationList />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Pages;
