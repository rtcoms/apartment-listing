import React from 'react';
import qs from 'qs';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import { useStoreActions } from 'easy-peasy';
import { useLocation } from 'react-router-dom';

 const ApartmentsFilterForm = ({redirect}) =>  {
  let location = useLocation();
  const history = useHistory();
  const updateQueryFilters = useStoreActions((actions) => actions.apartmentFilters.updateQueryFilters);

   return <div>
     <h1>Search Apartments</h1>
     <Formik
       initialValues={{ price_gte: '', price_lte: '', area_gte: '', area_lte: ''  }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           if(redirect) {
            const queryString = qs.stringify({query: values})
            history.push(`/apartments?${queryString}`);
           } else {
            updateQueryFilters(values);
           }
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="number" name="price_gte" />
           <Field type="number" name="price_lte" />
           <Field type="number" name="area_gte" />
           <Field type="number" name="area_lte" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 };

 export default ApartmentsFilterForm;
