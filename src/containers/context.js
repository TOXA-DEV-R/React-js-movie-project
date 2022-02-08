/** @format */

import { createContext, useContext, useState } from "react";

const ContainersContext = createContext();

const ContainersProvider = ({ children }) => {
  const [submenuStyle, setSubmenuStyle] = useState({});

  const openSubmenu = (props) => {
    setSubmenuStyle({ left: props.center, top: props.bottom });
  };

  return (
    <ContainersContext.Provider
      value={{
        submenuStyle,
        setSubmenuStyle,
        openSubmenu,
      }}
    >
      {children}
    </ContainersContext.Provider>
  );
};

const useContainersContext = () => {
  return useContext(ContainersContext);
};

export { ContainersProvider, useContainersContext };
