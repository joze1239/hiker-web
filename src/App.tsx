import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

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
