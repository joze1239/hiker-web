import { ChakraProvider } from '@chakra-ui/react';
import Pages from 'pages/Pages';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { theme } from 'theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Pages />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
