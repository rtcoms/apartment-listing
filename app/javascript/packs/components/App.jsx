import React from "react";
import Routes from "./routes/Index.jsx";
import { StoreProvider } from 'easy-peasy';
import store from '../store.js';

export default props => <StoreProvider store={store}>{Routes}</StoreProvider>;
