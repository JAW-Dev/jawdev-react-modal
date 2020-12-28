// Import packages
import React from 'react';
import styled from 'styled-components';

// Import Styles
import { getModalOverlayStyles } from '../modules/styles';

// Import modules
import modalCloseActions from '../modules/modalCloseActions';
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';

// Import interfaces
import './../interfaces';

const StyledModalOverlay = styled.div<StylesType>`${props => cssObjectToStyledComponent(getModalOverlayStyles(props.overwriteStyles))}`;

const ModalOverlay: React.FC<ElementPropsType> = ({ action, focus, focusElement, options }) => {
  const modalOverlayStyles: object | any = options?.modalOverlayStyles!;
  const content: any = options?.content!;

  return (
    <StyledModalOverlay
      className='modal__overlay'
      overwriteStyles={modalOverlayStyles!}
      onClick={(e: React.MouseEvent): void => modalCloseActions(action, focus, e, focusElement!, content)}
    />
  );
};

export default ModalOverlay;
