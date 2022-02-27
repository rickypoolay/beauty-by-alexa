import React, { useReducer } from "react";
import { pageLoadContext } from "./page-load-context";
import pageLoadReducer from "./page-load-reducer";

function PageLoadState({ children }) {
  const initialState = {
    initialLoad: false,
  };

  const [{ initialLoad }, dispatch] = useReducer(pageLoadReducer, initialState);

  return (
    <pageLoadContext.Provider value={{ initialLoad, dispatch }}>
      {children}
    </pageLoadContext.Provider>
  );
}

export default PageLoadState;
