import { model } from './store.js';
import { createStore } from 'easy-peasy';

test('updateApartmentList', async () => {
  const apartments = [{ id: 1, text: 'foo' }];
  const store = createStore(model);
  store.getActions().apartments.updateApartmentList(apartments);

  expect(store.getState().apartments.paginatedListing).toEqual(apartments);
});

test('setFilters', async () => {
  const store = createStore(model);
  store.getActions().apartmentFilters.setFilters({page: 2});

  expect(store.getState().apartmentFilters.filters).toEqual({page: 2});
});

test('updatePageNumber', async () => {
  const store = createStore(model, {initialState: {apartmentFilters: {filters: {}}}});
  store.getActions().apartmentFilters.updatePageNumber(5);

  expect(store.getState().apartmentFilters.filters).toEqual({page: 5});
});

test('updateQueryFilters', async () => {
  const query = {price_gte: 5000} ;
  const store = createStore(model, {initialState: {apartmentFilters: {filters: {}}}});
  store.getActions().apartmentFilters.updateQueryFilters(query);

  expect(store.getState().apartmentFilters.filters.query).toEqual(query);
});
