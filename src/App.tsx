import OtherInformation from 'components/createOtherDetails';
import CreateSuccessComponent from 'components/createSuccess';
import EditSelection from 'components/EditSelection';
import PladgeEditList from 'components/PledgeEdit';
import { AppProvider } from 'context';
import { Layout } from 'Layout';
import { CreatePledge } from 'pages/Create';
import EditPage from 'pages/Edit';
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
          <Route path="/edit" element={<EditPage />} >
            <Route index element={<EditSelection />} />
            <Route path=":cif" element={<PladgeEditList />} />
          </Route>
        </Route>
      </Routes>
    </AppProvider>
  );
};

export default App;
