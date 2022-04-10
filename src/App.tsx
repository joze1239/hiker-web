import { ChakraProvider } from '@chakra-ui/react';
import 'i18n';
import Pages from 'pages/Pages';
import React from 'react';
import { MapProvider } from 'react-map-gl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { theme } from 'theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <MapProvider>
            <Pages />
          </MapProvider>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
