import React, { useState } from "react";
import PropTypes from 'prop-types';
import Context from "./Context";

export default function Provider({ children }) {
  const [isTranslate, setIsTranslate] = useState();
  const contextValue = {
    isTranslate,
    setIsTranslate,
  };
  return (
      <Context.Provider value={contextValue}>
        {children}
      </Context.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };
