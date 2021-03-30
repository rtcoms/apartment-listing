
import * as React from "react";
import Routes from "./routes/Index.jsx";
import { StoreProvider } from 'easy-peasy';
import { ChakraProvider } from "@chakra-ui/react";
import store from '../store.js';

export default (props) => {
  return (
    <StoreProvider store={store}>
      <ChakraProvider>
        {Routes}
      </ChakraProvider>
    </StoreProvider>
  )
};
