import React from 'react';
import PropTypes from 'prop-types'
import { useStoreState } from 'easy-peasy';


const ApartmentList = () => {
  const paginatedApartments = useStoreState((state) => state.apartments);
  const apartments = paginatedApartments.paginatedListing.apartments.data;

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

ApartmentList.propTypes = {
  searchParams: PropTypes.object,
};

export default ApartmentList;
