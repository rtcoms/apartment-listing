import qs from 'qs';
const BASE_API = "/api/v1"

export const fetchApi = (url, searchParams) => {
  const endpoint = `${BASE_API}/${url}`
  const queryString = qs.stringify(searchParams);
  const fullUrl = `${endpoint}?${queryString}`;

  return fetch(fullUrl, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
};
