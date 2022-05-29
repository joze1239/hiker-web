import 'i18n';
import Pages from 'pages/Pages';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setShowVisited } from 'store/slices/settingsSlice';

const App: React.FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get('visited') === 'true') {
      dispatch(setShowVisited(true));
    }
  }, []);

  return <Pages />;
};

export default App;
