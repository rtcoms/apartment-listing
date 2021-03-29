import React from 'react'
import PropTypes from 'prop-types'
import { useStoreActions } from 'easy-peasy';

const PaginationLink = ({name, pageNumber}) =>{
  const updatePageNumber = useStoreActions((actions) => actions.apartmentFilters.updatePageNumber);
  function handleClick() {
    updatePageNumber(pageNumber);
  }
  return <React.Fragment>
    <button type="button" onClick={handleClick}>
      {name}
    </button>
  </React.Fragment>
}

PaginationLink.defaultProps = {
  name: '',
  pageNumber: null

}

PaginationLink.propTypes = {
  name: PropTypes.string,
  pageNumber: PropTypes.number,
}

export default PaginationLink;
