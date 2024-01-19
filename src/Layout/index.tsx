import React from 'react';
import { Outlet } from 'react-router-dom';

import { VStack } from '@abb/backoffice-ui';

export const Layout: React.FC = () => {
  return (
    <VStack spacing={'20px'} align={'start'} w={'100%'}>
        <Outlet />
    </VStack>
  );
};
