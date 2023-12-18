import React from 'react';

const AppContext = React.createContext([]);

function AppProvider({ children }) {
  const [isCreateButttonExist,setIsCreateButtonExist] = React.useState(true)
 




  return (
    <AppContext.Provider value={[{isCreateButttonExist,setIsCreateButtonExist}]}>
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const appContext = React.useContext(AppContext);
  return appContext;
};

export { useAppContext, AppProvider };