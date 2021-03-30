import React, { useEffect } from 'react'
import qs, { parse } from 'qs';
import { Link } from "react-router-dom";
import ApartmentPage from './ApartmentPage.jsx';
import ApartmentsFilterForm from './ApartmentsFilterForm.jsx';
import { useLocation } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

function Apartments () {
  let location = useLocation();
  let parsedParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  const updateApartmentFilters = useStoreActions((actions) => actions.apartmentFilters.setFilters);

  updateApartmentFilters(parsedParams);

  if(parsedParams === null) {
    return  <div></div>;
  } else {
    return (<React.Fragment>
      <div>Apartments Listing</div>
      <ApartmentPage />
      <Link to={`/`}> Back to Home </Link>
      <ApartmentsFilterForm redirect  />
    </React.Fragment>)
  }

}

Apartments.defaultProps = {}

Apartments.propTypes = {
}

export default Apartments;
