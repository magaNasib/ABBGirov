import DatePicker from 'react-datepicker';
import { FormErrorMessage, FormLabel, InputGroup, InputRightElement, chakra } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';


const ChakraDatePicker = chakra(DatePicker, {
  baseStyle: {
    // marginTop: '32px',
    minWidth: '15rem',
    width: '100%',
    height: '2.5rem',
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

const dateFormatRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

const MyDatePicker = ({ label, field }) => {
  const [isInvalidDate, setIsInvalidDate] = useState(false);

  const handleDateChange = (date) => {
    const dateString = date.toLocaleDateString();

    setIsInvalidDate(!dateFormatRegex.test(dateString));

    if (dateFormatRegex.test(dateString)) {
      field.onChange(date);
    }
  };

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
          onChange={handleDateChange}
          isInvalid={isInvalidDate}
        />
        <InputRightElement pointerEvents="none">
          <FaCalendar color="gray.300" />
        </InputRightElement>
      </InputGroup>
      {isInvalidDate && (
        <FormErrorMessage color={'red'} fontSize={'14px'}>
          Please enter a valid date in the format
        </FormErrorMessage>
      )}
    </>
  );
};
MyDatePicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  field: PropTypes.any
};

export default MyDatePicker





