import React from 'react';
import qs from 'qs';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Center, Text, HStack, VStack, Input, Radio, RadioGroup, SimpleGrid, Button } from "@chakra-ui/react"
import './form.scss';

 const ApartmentsFilterForm = ({redirect}) =>  {
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const queryString = qs.stringify({query: data})
    history.push(`/apartments?${queryString}`);
  };

   return <div>
     <h1>Search Apartments</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
        <VStack color='black'>
          <Center>
            <VStack>
              <Text>Price</Text>
              <SimpleGrid columns={{sm: 2, md: 2}} spacing="40px">
                <Input borderWidth="1px" type='number' name="price_gte" placeholder="Price(min)" defaultValue="" ref={register} />
                <Input borderWidth="1px" type='number' name="price_lte" placeholder="Price(max)" defaultValue="" ref={register} />
              </SimpleGrid>
            </VStack>
          </Center>

          <Center>
            <VStack>
              <Text>Area</Text>
              <SimpleGrid columns={{sm: 2, md: 2}} spacing="40px">
                <Input borderWidth="1px" type='number' name="area_gte" placeholder="Area(min)" defaultValue="" ref={register} />
                <Input borderWidth="1px" type='number' name="area_lte" placeholder="Area(max)" defaultValue="" ref={register} />
              </SimpleGrid>
            </VStack>
          </Center>

          <Center>
            <VStack>
              <Text>Number of Bedrooms</Text>
              <div className="radioGroup">
                <RadioGroup name='number_of_bedrooms_gte'>
                  <HStack direction="row">
                    <label className='radio-btn'><Radio value='1' ref={register} className={'radio'} /> 1+</label>
                    <label className='radio-btn'><Radio value='2' ref={register} className={'radio'} /> 2+</label>
                    <label className='radio-btn'><Radio value='3' ref={register} className={'radio'} /> 3+</label>
                    <label className='radio-btn'><Radio value='4' ref={register} className={'radio'} /> 4+</label>
                    <label className='radio-btn'><Radio value='5' ref={register} className={'radio'} /> 5+</label>
                  </HStack>
                </RadioGroup>
              </div>
            </VStack>
          </Center>
        </VStack>

        <Center>
          <Button mt={4} type="submit">Submit</Button>
        </Center>
      </form>
   </div>
 };

 export default ApartmentsFilterForm;
