import CreateMain from 'components/createMainPage';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const CreatePledge: React.FC<React.PropsWithChildren> = ({ children }) => {
  const {state} = useLocation();

  React.useEffect(() => {
  console.log(state);

  },[])
  return (
    <>
      <CreateMain  />
      {children}
    </>
  );
};
