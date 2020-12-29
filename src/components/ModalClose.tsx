// Import packages
import React from 'react';
import styled from 'styled-components';

// Import modules
import getModalStyles from './../modules/getModalStyles';
import modalCloseActions from '../modules/modalCloseActions';
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';

// Import interfaces
import './../interfaces';

const defaultStyles = {
  position: 'absolute',
  top: '0.25rem',
  right: '0.25rem',
  padding: '0',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  ':hover': {
    cursor: 'pointer'
  }
};

const StyledModalClose = styled.button<StylesType>`${props => cssObjectToStyledComponent(getModalStyles(props.overwriteStyles, defaultStyles))}`;

const ModalClose: React.FC<ElementPropsType> = ({ children, content, action, focus, focusElement, options }) => {
  const modalCloseStyles: object | any = options?.modalCloseStyles!;

  return (
    <StyledModalClose
      className='modal__close'
      overwriteStyles={modalCloseStyles!}
      onClick={(e: React.MouseEvent): void => modalCloseActions(action, focus, e, focusElement!, content)}
    >
      {children}
    </StyledModalClose>
  );
};

export default ModalClose;
