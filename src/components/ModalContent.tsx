// Import packages
import React from 'react';
import styled from 'styled-components';

// Import styles
import { getModalContentStyles } from '../modules/styles';

// Import modules
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';

// Import interfaces
import './../interfaces';

const StyledModalContent = styled.div<StylesType>`${props => cssObjectToStyledComponent(getModalContentStyles(props.overwriteStyles))}`;

const ModalContent: React.FC<ElementPropsType> = ({ children, options }) => {
  const modalContentStyles: object | any = options?.modalContentStyles!;

  return (
    <StyledModalContent
      className='modal__content'
      overwriteStyles={modalContentStyles!}
    >
      {children}
    </StyledModalContent>
  );
};

export default ModalContent;
