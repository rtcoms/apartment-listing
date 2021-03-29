
import { createStore } from 'easy-peasy';

import { action } from 'easy-peasy';

const model = {
  apartments: {
    paginatedListing: null,

    updateApartmentList: action((state, payload) => {
      state.paginatedListing = payload;
    }),
  },

  apartmentFilters: {
    filters: null,

    setFilters: action((state, apartmentFilters) => {
      state.filters = apartmentFilters;
    }),

    updatePageNumber: action((state, newPageNumber) => {
      state.filters.page = newPageNumber;
    }),
  },
};

const store = createStore(model);

export default store;
