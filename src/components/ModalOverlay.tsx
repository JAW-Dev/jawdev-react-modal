// Import packages
import React from 'react';
import styled from 'styled-components';

// Import providers
import { useOptions } from './../providers/OptionsProvider';

// Import modules
import modalCloseActions from '../modules/modalCloseActions';
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';
import getModalStyles from './../modules/getModalStyles';

// Import interfaces
import './../interfaces';

const defaultStyles = {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
};

const StyledModalOverlay = styled.div<StylesType>`${props => cssObjectToStyledComponent(getModalStyles(props.overwriteStyles, defaultStyles))}`;

const ModalOverlay: React.FC<ElementPropsType> = ({ focusElement }) => {
  const options = useOptions();
  const modalOverlayStyles: object | any = options?.modalOverlayStyles!;

  const clickhandler = (e: React.MouseEvent): void => {
    if (options.closeOnOverlayClick) {
      modalCloseActions(options!.action, options!.focus, e, focusElement!, '');
    }
  };

  return (
    <StyledModalOverlay
      className='modal__overlay'
      overwriteStyles={modalOverlayStyles!}
      onClick={clickhandler}
    />
  );
};

export default ModalOverlay;
