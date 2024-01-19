import DatePicker from 'react-datepicker';
import { FormLabel, Icon, InputGroup, InputRightElement, chakra } from '@abb/backoffice-ui';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { IFormValues } from 'pages/Create';
import './datePicker.css'
interface IProps {
  label: string
  disabled?: boolean
  field: ControllerRenderProps<IFormValues, any>
}

const ChakraDatePicker = chakra(DatePicker, {
  baseStyle: {
    w:'100%',
    // marginTop: '32px',
    minWidth: '15rem',
    height: '2.5rem',
    padding: '0 7px',
    ':focus': {
      outline: '3px solid #0E86D4',
      borderRadius: '2px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
      border: 'none',
    },
    border: '1px solid #d3d3d3',
    borderRadius: '5px',
    position: 'relative',
    zIndex: 55

  },
});
const MyDatePicker = ({ label, field, disabled = false }: IProps) => {
  // const today = new Date();

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <InputGroup w={'100%'}>
        <ChakraDatePicker
          className='h-full bg-red customDatePckr'
          toggleCalendarOnIconClick
          placeholderText='mm/dd/yyyy'
          selected={field.value}
          onChange={(date) => {
            field.onChange(date)
          }}
        // maxDate={today}
        />

        <InputRightElement pointerEvents="none">
        <Icon stroke="currentColor" fill="none">
          <path
        d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
          </Icon>
        </InputRightElement>
      </InputGroup>
    </>

  );
};

export default MyDatePicker


