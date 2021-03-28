import { fetchApi } from './base.js';

export const fetchApartmentsApi = (searchParams) => {
  const baseApartmentApi = '/apartments';
  return fetchApi(baseApartmentApi, searchParams).then((response) => response.json());
};
