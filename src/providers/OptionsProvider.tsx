// Import packages
import React, { createContext, useContext } from 'react';

// Import modules

interface OptionsContextProps { [key: string]: any };

interface initOptionsProps {
  options: object | undefined
};

export const OptionsContext = createContext({} as OptionsContextProps);

export const OptionsProvider: React.FC<initOptionsProps> = ({ options, children }) => {
  const setOptions: OptionsContextProps = options!;

  // Setup defaults
  setOptions!.delay = setOptions!.delay || 500;
  setOptions!.label = setOptions!.label || 'Open';

  return (
    <OptionsContext.Provider value={setOptions!}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = () => useContext(OptionsContext);
