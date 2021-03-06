// Import packages
import React from 'react';
import styled from 'styled-components';

// Import providers
import { useOptions } from './../providers/OptionsProvider';

// Import modules
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';
import getModalStyles from './../modules/getModalStyles';

const defaultStyles = {
  ':hover': {
    cursor: 'pointer'
  }
};

const StyledModalIcon = styled.div<StylesType>`${props => cssObjectToStyledComponent(getModalStyles(props.overwriteStyles, defaultStyles))}`;

const ModalIcon = ({ children }) => {
  const options = useOptions();
  const modalIconStyles: object | any = options?.modalIconStyles!;

  return (
    <StyledModalIcon className='modal__icon' overwriteStyles={modalIconStyles!}>
      {children}
    </StyledModalIcon>
  );
};

export default ModalIcon;
