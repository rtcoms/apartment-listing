import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import ApartmentsFilterForm from './ApartmentsFilterForm.jsx';

const Home = props => (
  <React.Fragment>
    <div>Home {props.name}!</div>
    <Link to={`/apartments`}>View Apartments</Link>
  </React.Fragment>
)

Home.defaultProps = {
  name: 'David'
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home;
