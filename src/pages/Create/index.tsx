import CreateMain from 'components/CreatePledge';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';

export interface IFormValues {
  customerId: number;
  customerName: string;
  product: string;
  value: number;
  description: string;
  currency: string;
  startDate: string;
  category: string;
  endDate: string;
}
export const CreatePledge: React.FC<React.PropsWithChildren> = () => {
  const methods = useForm<IFormValues>();

  return (
    <FormProvider {...methods}>
      <CreateMain />
      <Outlet />
    </FormProvider>
  );
};
