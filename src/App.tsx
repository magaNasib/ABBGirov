import OtherInformation from 'components/createOtherDetails';
import CreateSuccessComponent from 'components/createSuccess';
import { AppProvider } from 'context';
import { Layout } from 'Layout';
import { CreatePledge } from 'pages/Create';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteLoading } from 'RouteLoading';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" key="/test" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<RouteLoading />}>
                <CreatePledge />
              </React.Suspense>
            }
          />
          <Route
            path="/:colletralCode"
            element={
              <CreatePledge>
                <OtherInformation />
              </CreatePledge>
            }
          />

          <Route path="/:colletralCode/successPage" element={<CreateSuccessComponent />} />
        </Route>
      </Routes>
    </AppProvider>
  );
};

export default App;
