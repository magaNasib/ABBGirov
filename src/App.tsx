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
            path="/create"
            element={
              <React.Suspense fallback={<RouteLoading />}>
                <CreatePledge />
              </React.Suspense>
            }
          >
            <Route path=":colletralCode" element={<OtherInformation />} />
          </Route>

          <Route path="/successPage" element={<CreateSuccessComponent />} />
        </Route>
      </Routes>
    </AppProvider>
  );
};

export default App;
