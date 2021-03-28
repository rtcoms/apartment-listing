import React from 'react'
import { Link } from "react-router-dom";
import ApartmentList from './ApartmentList.jsx';

const Apartments = props => (
  <React.Fragment>
    <div>Apartments Listing</div>
    <ApartmentList searchParams={{query: {price_gte: 0, price_lte: 100000}}} />
    <Link to={`/`}>
      Back to Home
    </Link>
  </React.Fragment>
)

Apartments.defaultProps = {}

Apartments.propTypes = {
}

export default Apartments;
