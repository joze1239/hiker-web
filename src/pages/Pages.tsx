import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ROUTE } from '../utils/routes';
import LocationListPage from './LocationListPage';
import MapPage from './MapPage';

const Pages: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path={ROUTE.MAP} element={<MapPage />} />
        <Route path={ROUTE.LIST} element={<LocationListPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default Pages;
