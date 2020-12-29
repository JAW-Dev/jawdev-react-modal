// Import packages
import React from 'react';
import styled from 'styled-components';

// Import modules
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';
import getModalStyles from './../modules/getModalStyles';

// Import interfaces
import './../interfaces';

const defaultStyles = {
  position: 'relative',
  zIndex: '20',
  padding: '2rem',
  backgroundColor: 'white'
};

const StyledModalContent = styled.div<StylesType>`${props => cssObjectToStyledComponent(getModalStyles(props.overwriteStyles, defaultStyles))}`;

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
