import DatePicker from 'react-datepicker';
import { FormLabel, InputGroup, InputRightElement, chakra } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';


const ChakraDatePicker = chakra(DatePicker, {
  baseStyle: {
    // marginTop: '32px',
    minWidth:'15rem',
    width:'100%',
    height:'2.5rem',
    padding: '0 7px',
    ':focus': {
      outline: '3px solid #0E86D4',
      borderRadius: '2px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
      border: 'none',
    },
    border: '1px solid #d3d3d3',
    borderRadius: '5px'
  },
});
const MyDatePicker = ({ label, field }) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
      <ChakraDatePicker
        //   className={className}
        showYearDropdown
        showMonthDropdown
        scrollableMonthYearDropdown
        placeholderText={'dd/mm/yyyy'}
        selected={field.value}
        {...field}
        type="datetime-local"
      />  
      <InputRightElement pointerEvents="none">
          <FaCalendar color="gray.300" />
         </InputRightElement>
      </InputGroup>
    </>
  );
};
MyDatePicker.propTypes = {
  className: PropTypes.string,
  label:PropTypes.string,
  field:PropTypes.any
};

export default MyDatePicker


