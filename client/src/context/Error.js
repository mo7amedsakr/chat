import React, { createContext, useState } from 'react';

export const ErrorContext = createContext({
  error: null,
  setError: () => {},
});

export const ErrorProvider = (props) => {
  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {props.children}
    </ErrorContext.Provider>
  );
};
