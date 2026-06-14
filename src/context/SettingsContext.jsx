import { createContext, useContext, useState } from "react";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [highContrast, setHighContrast] = useState(false);

  return (
    <SettingsContext.Provider
      value={{
        highContrast,
        toggleHighContrast: () => setHighContrast((v) => !v),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
