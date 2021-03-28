import React, { useState, useEffect } from 'react';
import { fetchApartmentsApi } from '../api/apartment.js';
import PropTypes from 'prop-types'


function ApartmentList ({searchParams}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartmentsApi(searchParams).then(
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
      <ul>
        {apartments.map((apartment) => {
          let apartmentAttributes = apartment.attributes;

          return (<li key={apartmentAttributes.id}>
            {apartmentAttributes.title} {apartmentAttributes.price}
          </li>)
          })}
      </ul>
    );
  }
}

ApartmentList.propTypes = {
  searchParams: PropTypes.object,
};

export default ApartmentList;
