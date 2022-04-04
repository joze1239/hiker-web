import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE } from 'utils/routes';
import HomePage from './HomePage';

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<HomePage />} />
      <Route path="*" element={<Navigate replace to={ROUTE.HOME} />} />
    </Routes>
  );
};

export default Pages;
