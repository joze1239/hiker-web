import { ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

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
