import CreateMain from 'components/createMainPage';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
interface IFormValues {
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
export const CreatePledge: React.FC<React.PropsWithChildren> = ({ children }) => {

  const methods = useForm<IFormValues>();

  return (
    <FormProvider {...methods}>
      <CreateMain methods={methods} />
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement<any>, { methods })
      )}
    </FormProvider>
  );
};
