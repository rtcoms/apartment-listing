import React, { useState, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { fetchApartmentsApi } from '../api/apartment.js';
import PropTypes from 'prop-types'
import ApartmentList from './ApartmentList';
import PaginationLink from './PaginationLink.jsx';


function ApartmentPage() {
  const updateApartmentList = useStoreActions((actions) => actions.apartments.updateApartmentList);
  const searchParams = useStoreState((state) => state.apartmentFilters.filters);
  const apartmentsData = useStoreState((state) => state.apartments.paginatedListing);
  const currentPage = searchParams.page || 1;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log('------track search params');
  console.log(searchParams);

  useEffect(() => {
    if(searchParams !== null) {
      fetchApartmentsApi(searchParams).then(
        (result) => {
          setIsLoaded(true);
          updateApartmentList(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }
  }, [searchParams])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || apartmentsData === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <ApartmentList />
        {!apartmentsData.is_first_page && <PaginationLink name='previous' pageNumber={currentPage - 1}></PaginationLink>}
        {!apartmentsData.is_last_page && <PaginationLink name='next' pageNumber={currentPage + 1}></PaginationLink>}
      </React.Fragment>
    )
  }
}

ApartmentPage.propTypes = {};

export default ApartmentPage;
