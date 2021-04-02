import React from 'react'
import PropTypes from 'prop-types'
import { useStoreActions } from 'easy-peasy';
import { Button } from '@chakra-ui/react';

const PaginationLink = ({name, pageNumber}) =>{
  const updatePageNumber = useStoreActions((actions) => actions.apartmentFilters.updatePageNumber);
  function handleClick() {
    updatePageNumber(pageNumber);
  }
  return <React.Fragment>
    <Button rounded={'full'} bg={'blue.400'} color={'white'} onClick={handleClick} >{name}</Button>
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
