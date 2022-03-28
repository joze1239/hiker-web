import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE } from 'utils/routes';
import LocationListPage from './LocationListPage';
import MapPage from './MapPage';

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={ROUTE.MAP} />} />
      <Route path={ROUTE.MAP} element={<MapPage />} />
      <Route path={ROUTE.LOCATIONS} element={<LocationListPage />} />
    </Routes>
  );
};

export default Pages;
