// Import packages
import React, { createContext, useContext } from 'react';

// Import modules

interface OptionsContextProps { [key: string]: any };

interface initOptionsProps {
  options: object | undefined
};

export const OptionsContext = createContext({} as OptionsContextProps);

export const OptionsProvider: React.FC<initOptionsProps> = ({ options, children }) => {
  const defaults = {
    label: 'Open',
    delay: 300,
    closeOnOverlayClick: true,
    closeOnButtonClick: true,
    openOnLoad: false,
    showButton: true,
    showCloseButton: true,
    modalContent: ''
  };

  const setOptions: OptionsContextProps = Object.assign({}, defaults, options!);

  return (
    <OptionsContext.Provider value={setOptions!}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptions = () => useContext(OptionsContext);
