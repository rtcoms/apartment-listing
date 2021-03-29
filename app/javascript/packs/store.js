
import { createStore } from 'easy-peasy';

import { action } from 'easy-peasy';

const model = {
  apartments: {
    paginatedListing: {},

    updateApartmentList: action((state, payload) => {
      state.paginatedListing = payload;
    }),
  },
  apartmentFilters: {
    filters: {},

    setFilters: action((state, apartmentFilters) => {
      state.filters = apartmentFilters;
    }),

    updatePageNumber: action((state, newPageNumber) => {
      state.filters.pageNUmber = newPageNumber;
    }),
  },
};

const store = createStore(model);

export default store;
