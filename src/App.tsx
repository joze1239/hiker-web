import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Pages />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
