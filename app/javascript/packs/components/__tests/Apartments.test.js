import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import nock from 'nock';
import {render, screen} from '@testing-library/react';
import Apartments from '../apartments/Apartments.jsx';
import { createStore, StoreProvider } from 'easy-peasy';
import { model } from '../../store.js';
global.fetch = require('node-fetch');

const waitForProcessing = async () => {
  await waitFor(() => expect(screen.getByText(/Loading.../i)).toBeInTheDocument());
  await waitFor(() => expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument());
};

const fakeApartmentsResponse = {
  "apartments": {
    "data":[
      {"id":"43","type":"apartment","attributes":{"id":43,"title":"Apartment 1","price":50000,"area":50,"number_of_bedrooms":3,"number_of_bathrooms":4,"image":"https://images.unsplash.com/photo-1486304873000-235643847519"}},
      {"id":"44","type":"apartment","attributes":{"id":44,"title":"Apartment 3","price":100000,"area":100,"number_of_bedrooms":3,"number_of_bathrooms":4,"image":"https://images.unsplash.com/photo-1486304873000-235643847519"}}
    ]
  },
  "total":1080,
  "page":1,
  "total_pages": 540,
  "page_item_count":2,
  "is_first_page":true,
  "is_last_page":false
};


test.skip('Apartments', () => {
  nock(process.env.API_HOST)
  .get('/api/v1/apartments')
  .reply(200, fakeApartmentsResponse);

  const store = createStore(model, {
    initialState: {
      apartments: {
        paginatedListing: null,
        apartmentFilters: { filters: { page: 1} }
      }
    }
  });

  // arrange
  const app = (
    <StoreProvider store={store}>
      <ChakraProvider>
        <Router>
          <Apartments />
        </Router>
      </ChakraProvider>
    </StoreProvider>
  );

  render(app);

  waitForProcessing()
  expect(screen.getByText('Apartments Listing')).toBeInTheDocument();
  expect(screen.getByText('Apartment 1')).toBeInTheDocument();
  expect(screen.getByText('Apartment 3')).toBeInTheDocument();
  expect(screen.getByText('Next')).toBeInTheDocument();
});
