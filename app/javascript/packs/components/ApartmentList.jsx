import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { fetchApartmentsApi } from '../api/apartment.js';
import PropTypes from 'prop-types'
import PaginationLink from './PaginationLink.jsx';


function ApartmentList ({searchParams}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apartments, setApartments] = useState([]);
  let location = useLocation();
  let parsedParams = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  useEffect(() => {
    fetchApartmentsApi(parsedParams).then(
      (result) => { setIsLoaded(true); setApartments(result.apartments.data); },
      (error) => { setIsLoaded(true); setError(error); }
    );
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul>
          {apartments.map((apartment) => {
            let apartmentAttributes = apartment.attributes;

            return (<li key={apartmentAttributes.id}>
              {apartmentAttributes.title} {apartmentAttributes.price}
            </li>)
            })}
        </ul>
      </div>
    );
  }
}

ApartmentList.propTypes = {
  searchParams: PropTypes.object,
};

export default ApartmentList;
