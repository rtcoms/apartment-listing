import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const PaginationLink = ({name, searchParams}) =>{
  console.log('---pagination----');
  console.log(searchParams);
  console.log('--------');
  return <React.Fragment>
      <Link to='/apartments'>{name}</Link>
  </React.Fragment>
}

PaginationLink.defaultProps = {
  name: '',
  searchparams: {}

}

PaginationLink.propTypes = {
  name: PropTypes.string,
  pageNumber: PropTypes.number,
  searchparams: PropTypes.object,
}

export default PaginationLink;
