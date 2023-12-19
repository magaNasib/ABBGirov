import CreateMain from 'components/createMainPage';
import React from 'react';

export const CreatePledge: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CreateMain />
      {children}
    </>
  );
};
