import React, { useState } from 'react';

export const OpenFormContext = React.createContext();

export const OpenFormProvider = ({ children }) => {
  const [openForm, setOpenForn] = useState(false);
  const toggleForm = () => setOpenForn((prev) => !prev);
  return (
    <OpenFormContext.Provider
      value={{
        visible: openForm,
        toggleForm,
      }}>
      {children}
    </OpenFormContext.Provider>
  );
};
