import React from 'react';
import PropTypes from 'prop-types'


const ApartmentList = ({apartments}) => {
  return (
    <div>
      <ul>
        {apartments.map((apartment) => {
          let apartmentAttributes = apartment.attributes;

          return (<li key={apartmentAttributes.id}>
            {apartmentAttributes.title} {apartmentAttributes.price}
          </li>)
          })}
      </ul>
    </div>
  );
}

ApartmentList.propTypes = {
  searchParams: PropTypes.object,
};

export default ApartmentList;
