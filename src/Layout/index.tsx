import { Grid } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <Grid gridTemplateColumns="1fr" gridTemplateRows="64px 1fr" minH="100vh" bg="white">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />

    </Grid>
  );
};
