// Import packages
import React from 'react';

// Import providers
import { OptionsProvider } from './providers/OptionsProvider';

// Import components
import ModalButton from './components/ModalButton';

// Import interfaces
import './interfaces';

const Modal: React.FC<IndexPropsType> = ({ children, options }) => {
  options = options === undefined ? {} : options!;
  options.content = options.content || children;

  return (
    <OptionsProvider options={options}>
      <ModalButton />
    </OptionsProvider>
  );
};

export default Modal;
