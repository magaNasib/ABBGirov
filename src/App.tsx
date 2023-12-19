import { Layout } from 'Layout';
import { RouteLoading } from 'RouteLoading';
import CreateMain from 'components/createMainPage';
import OtherInformation from 'components/createOtherDetails';
import CreateSuccessComponent from 'components/createSuccess';
import { AppProvider } from 'context';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
                {/* <CreateMainIsmail
                  colletralCode={colletralCode}
                  setCollettralCode={setCollettralCode}
                  setOtherDetailsOpen={setOtherDetailsOpen} 
                  otherDetailsOpen={otherDetailsOpen}
                /> */}
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


          <Route path='/successPage' element={<CreateSuccessComponent/>} />
        </Route>
      </Routes>
    </AppProvider>
  );
};

export default App;
