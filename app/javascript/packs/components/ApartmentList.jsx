import React from 'react';
import PropTypes from 'prop-types'
import { useStoreState } from 'easy-peasy';
import { SimpleGrid, Heading } from "@chakra-ui/react";
import ApartmentCard from './ApartmentCard.jsx';


const ApartmentList = () => {
  const paginatedApartments = useStoreState((state) => state.apartments);
  const apartments = paginatedApartments.paginatedListing.apartments.data;

  if(apartments.length == 0) {
    return <Heading as="h5" color="gray.500" size="xl">No apartments for selected filter</Heading>
  };

  return (
    <div>
      <ul>
      <SimpleGrid columns='3' spacing="40px" pr={50} mb={50}>
        {apartments.map((apartment) => {
          return <ApartmentCard apartment={apartment.attributes} key={apartment.id} />;
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
