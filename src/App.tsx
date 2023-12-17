import { ChakraProvider } from '@chakra-ui/react';
import CreateMain from 'components/createMain';
import OtherInformation from 'components/createOtherDetails';
// import CreateSuccessComponent from 'components/createSuccess';
import { Layout } from 'Layout';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteLoading } from 'RouteLoading';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" key="/test" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<RouteLoading />}>
              <ChakraProvider>
                <CreateMain/>
                {/* <CreateSuccessComponent/> */}
                <OtherInformation/>
              </ChakraProvider>
            </React.Suspense>
          }
        />
        <Route path="/sub" element={<h1>MF SUB Route</h1>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
};

export default App;
