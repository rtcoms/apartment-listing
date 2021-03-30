import React from 'react';
import PropTypes from 'prop-types'
import { useStoreState } from 'easy-peasy';
import { SimpleGrid } from "@chakra-ui/react";
import ApartmentCard from './ApartmentCard.jsx';


const ApartmentList = () => {
  const paginatedApartments = useStoreState((state) => state.apartments);
  const apartments = paginatedApartments.paginatedListing.apartments.data;

  return (
    <div>
      <ul>
      <SimpleGrid columns={{sm: 2, md: 3}} spacing="40px">
        {apartments.map((apartment) => {
          return <ApartmentCard apartment={apartment.attributes} />;
        })}
      </SimpleGrid>

      </ul>
    </div>
  );
}

ApartmentList.propTypes = {
  searchParams: PropTypes.object,
};

export default ApartmentList;
