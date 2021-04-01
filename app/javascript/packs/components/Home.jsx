import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Button, Flex, Heading, Stack, Text, } from '@chakra-ui/react';

const Home = () => (
  <Stack minH={'100vh'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack>
          <Heading>
            <Text as={'span'} position={'relative'}>Hello Kasaz</Text>
            <br />
            <Text color={'blue.400'} as={'span'}>Aparmtnet Listing</Text>
          </Heading>
          <Text fontSize='md' color={'gray.500'}>This is an apartment listing management project</Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button rounded={'full'} bg={'blue.400'} color={'white'} >
              <Link to={`/apartments`}>View Apartments</Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
)

Home.defaultProps = {
  name: 'David'
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home;
