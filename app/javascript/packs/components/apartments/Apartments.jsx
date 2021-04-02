import React, { useEffect } from 'react'
import qs, { parse } from 'qs';
import { Link } from "react-router-dom";
import ApartmentPage from './ApartmentPage.jsx';
import { useLocation } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import { Box, Text } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"

function Apartments () {
  let location = useLocation();
  let parsedParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  const updateApartmentFilters = useStoreActions((actions) => actions.apartmentFilters.setFilters);

  updateApartmentFilters(parsedParams);

  if(parsedParams === null) {
    return  <div></div>;
  } else {
    return (<React.Fragment>
      <Box pt={50} pl={50} w="100%"  color="black">
        <Box pb={5}><Text fontSize="20px" color="green"><Link to={`/`}> {'< Back to Home'}</Link></Text></Box>
        <Box pb={20}><Heading as="h1" size="2xl">Apartments Listing</Heading></Box>
        <Box pb={5} pl={5}><ApartmentPage /></Box>
      </Box>
    </React.Fragment>)
  }

}

Apartments.defaultProps = {}

Apartments.propTypes = {
}

export default Apartments;
