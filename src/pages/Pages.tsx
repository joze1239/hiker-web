import Navbar from 'components/Navbar';
import Home from 'pages//home/Home';
import HomeLocationList from 'pages/home/HomeLocationList';
import HomeMap from 'pages/home/HomeMap';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE } from 'utils/routes';

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
