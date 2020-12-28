// Import packages
import React from 'react';
import styled from 'styled-components';

// Import modules
import { getModalCloseStyles } from './../modules/styles';
import modalCloseActions from '../modules/modalCloseActions';
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';

// Import interfaces
import './../interfaces';

const StyledModalClose = styled.button<StylesType>`${props => cssObjectToStyledComponent(getModalCloseStyles(props.overwriteStyles))}`;

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
