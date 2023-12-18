import { Layout } from 'Layout';
import { RouteLoading } from 'RouteLoading';
import CreateMain from 'components/CreateMain';
import OtherInformation from 'components/createOtherDetails';
import { AppProvider } from 'context';
import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import useSWR from 'swr';

const fetchPledgesData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const App: React.FC = () => {
  const [otherDetailsOpen, setOtherDetailsOpen] = useState(false);
  const [colletralCode, setCollettralCode] = React.useState('');
  const { data: pledgeData, error: pledgeError } = useSWR(
    `http://localhost:8082/pledges/${colletralCode}`,
    fetchPledgesData
  );


  return (
    <AppProvider>
    <Routes>
      <Route path="/" key="/test" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<RouteLoading />}>
              <CreateMain
                colletralCode={colletralCode}
                setCollettralCode={setCollettralCode}
                setOtherDetailsOpen={setOtherDetailsOpen}
                otherDetailsOpen={otherDetailsOpen}
              />
              {otherDetailsOpen && <OtherInformation data={pledgeData} error={pledgeError} />}
            </React.Suspense>
          }
        />

        <Route path='/sub' element={<h1>salam</h1>}/>
      </Route>
    </Routes>
    </AppProvider>
  );
};

export default App;
