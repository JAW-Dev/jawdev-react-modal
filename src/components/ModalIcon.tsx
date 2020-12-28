// Import packages
import React from 'react';
import styled from 'styled-components';

// Import module
import { getModalIconStyles } from '../modules/styles';

// Import moduels
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';

const StyledModalIcon = styled.div<StylesType>`${props => cssObjectToStyledComponent(getModalIconStyles(props.overwriteStyles))}`;

const ModalIcon = ({ children, options }) => {
  const modalIconStyles: object | any = options?.modalIconStyles!;

  return (
    <StyledModalIcon className='modal__icon' overwriteStyles={modalIconStyles!}>
      {children}
    </StyledModalIcon>
  );
};

export default ModalIcon;
