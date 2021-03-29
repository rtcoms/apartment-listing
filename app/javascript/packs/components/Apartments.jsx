import React from 'react'
import { Link } from "react-router-dom";
import ApartmentPage from './ApartmentPage.jsx';

const Apartments = props => (

  <React.Fragment>
    <div>Apartments Listing</div>
    <ApartmentPage />
    <Link to={`/`}>
      Back to Home
    </Link>
  </React.Fragment>
)

Apartments.defaultProps = {}

Apartments.propTypes = {
}

export default Apartments;
