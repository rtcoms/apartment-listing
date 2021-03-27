import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Apartments = props => (
  <React.Fragment>
    <div>Apartments Listing</div>
    <Link to={`/`}>
      Back to Home
    </Link>
  </React.Fragment>
)

Apartments.defaultProps = {}

Apartments.propTypes = {
}

export default Apartments;
