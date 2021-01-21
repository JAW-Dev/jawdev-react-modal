// Import packages
import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

// Import providers
import { useOptions } from './../providers/OptionsProvider';

// Import modules
import cssObjectToStyledComponent from '../modules/cssObjectToStyledComponent';
import getModalStyles from '../modules/getModalStyles';
import modalUpdate from './../modules/modalUpdate';
import { ACTIONS, modalReducer } from './../modules/modalReducer';
import modalCloseFocus from './../modules/modalCloseFocus';
import modalCloseEsc from './../modules/modalCloseEsc';

// Import components
import ModalElement from './ModalElement';

// Import interfaces
import '../interfaces';

const StyledModalButton = styled.button<StylesType>`
  ${props => {
    return cssObjectToStyledComponent(getModalStyles(props.overwriteStyles));
  }}
`;

const ModalButton: React.FC<ElementPropsType> = () => {
  const options = useOptions();
  const modalbuttonStyles: object | any = options?.modalbuttonStyles!;
  const delay = options.delay;
  const [state, dispatch] = useReducer<any | any>(modalReducer, '');
  const [modalContent, setModalContent] = useState<string | ''>('');
  const updateContentOptions: UpdateType = { ACTIONS, state, dispatch, setModalContent, delay };
  const updateContent: (e: React.MouseEvent, content: any) => void = (e: React.MouseEvent, content: any) => modalUpdate(e, content, updateContentOptions);

  options!.action = updateContent;
  options.modalContent = options.openOnLoad ? options.content : modalContent;

  const refocus = (focusElement: HTMLElement) => modalCloseFocus(focusElement);
  options!.focus = refocus;

  modalCloseEsc(updateContent, refocus, document.activeElement as HTMLElement);

  if (options.showButton) {
    return (
      <StyledModalButton
        className='modal__button'
        overwriteStyles={modalbuttonStyles!}
        onClick={(e: React.MouseEvent): void => updateContent(e, options.content)}
      >
        {options.label}
        <ModalElement />
      </StyledModalButton>
    );
  }

  return <ModalElement />;
};

export default ModalButton;
