import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStoreActions, userStoreState } from 'easy-peasy';
import qs from 'qs';
import { fetchApartmentsApi } from '../api/apartment.js';
import PropTypes from 'prop-types'
import ApartmentList from './ApartmentList';
import PaginationLink from './PaginationLink.jsx';


function ApartmentPage() {
  let location = useLocation();
  let parsedParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  const updateApartmentFilters = useStoreActions((actions) => actions.apartmentFilters.setFilters);
  const updateApartmentList = useStoreActions((actions) => actions.apartments.updateApartmentList);

  const [searchParams, setSearchParams] = useState(parsedParams);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apartimentPaginationData, setApartmentsData] = useState(null);

  useEffect(() => {
    setSearchParams(parsedParams);
    updateApartmentFilters(parsedParams);
    fetchApartmentsApi(searchParams).then(
      (result) => {
        setIsLoaded(true);
        updateApartmentList(result)
        setApartmentsData(result); },
      (error) => { setIsLoaded(true); setError(error); }
    );
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || apartimentPaginationData === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <ApartmentList apartments={apartimentPaginationData.apartments.data} />
        {!apartimentPaginationData.is_first_page && <PaginationLink name='previos'></PaginationLink>}
        {!apartimentPaginationData.is_last_page && <PaginationLink name='next'></PaginationLink>}
      </React.Fragment>
    )
  }
}

ApartmentPage.propTypes = {};

export default ApartmentPage;
