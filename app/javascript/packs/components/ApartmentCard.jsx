import React from 'react';
import { Box, Image } from "@chakra-ui/react"

const ApartmentCard = ({apartment}) => {

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={apartment.image} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {apartment.area} SQMT &bull; {apartment.number_of_bedrooms} beds &bull; {apartment.number_of_bathrooms} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {apartment.title}
        </Box>

        <Box> ${apartment.price} </Box>
      </Box>
    </Box>
  )
}

export default ApartmentCard;
