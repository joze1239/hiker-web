import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE } from 'utils/routes';
import HomePage from './HomePage';
import LocationPage from './LocationPage';

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.LOCATION} element={<LocationPage />} />
      <Route path="*" element={<Navigate replace to={ROUTE.HOME} />} />
    </Routes>
  );
};

export default Pages;
