import CreateMain, { IProps } from 'components/createMainPage';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';

export interface IFormValues {
  customerId: string;
  customerName: string;
  product: string;
  value: string;
  description: string;
  currency: 'AZN' | 'USD';
  startDate: string;
  category: string;
  endDate: string;
  propertyType: string;
  owner: string;
  propertyDetail: string;
  buildingCompany: string;
  city: string;
  district: string;
  municipality: string;
  'town/village': string;
  'construction-project': string;
  'land-designation': string;
}
export const CreatePledge: React.FC<React.PropsWithChildren<IProps>> = ({ mode }) => {
  const methods = useForm<IFormValues>({
    defaultValues:{
      customerId:'',
      value:'',
      description:'',
      propertyDetail: '',
      buildingCompany: '',
      city: '',
      owner:'',
      district: '',
      municipality: '',
      'town/village': '',
      'construction-project': '',
      'land-designation': '',
    }
  });

  return (
    <FormProvider {...methods}>
      <CreateMain mode={mode} />
      <Outlet />
    </FormProvider>
  );
};
