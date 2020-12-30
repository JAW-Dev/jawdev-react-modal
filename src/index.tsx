// Import packages
import React, { useReducer, useState } from 'react';
import styled from 'styled-components';

// Import modules
import modalUpdate from './modules/modalUpdate';
import { ACTIONS, modalReducer } from './modules/modalReducer';
import modalCloseFocus from './modules/modalCloseFocus';
import modalCloseEsc from './modules/modalCloseEsc';
import cssObjectToStyledComponent from './modules/cssObjectToStyledComponent';
import getModalStyles from './modules/getModalStyles';

// Import components
import ModalElement from './components/ModalElement';

// Import interfaces
import './interfaces';

const StyledModalButton = styled.button<StylesType>`
  ${props => {
    return cssObjectToStyledComponent(getModalStyles(props.overwriteStyles));
  }}
`;

const Modal: React.FC<IndexPropsType> = ({ content, modalbuttonStyles, children, options }) => {
  // Setup the options
  const rootContent: any = content || children;
  const rootOptions: OptionsType = options!;
  const delayDefault: string = '300';

  // Get the Modal delay
  const delay: string = rootOptions.delay.toString() || delayDefault;

  if (!options?.delay) {
    options!.delay = delayDefault;
  }

  // Get the button label
  const label: string = rootOptions.label || 'Open';

  // Update the content
  const [state, dispatch] = useReducer<any | any>(modalReducer, '');
  const [modalContent, setModalContent] = useState<string | ''>('');
  const updateContentOptions: UpdateType = { ACTIONS, state, dispatch, setModalContent, delay };
  const updateContent: (e: React.MouseEvent, content: any) => void = (e: React.MouseEvent, content: any) => modalUpdate(e, content, updateContentOptions);

  const refocus = (focusElement: HTMLElement) => modalCloseFocus(focusElement);

  modalCloseEsc(updateContent, refocus, document.activeElement as HTMLElement);

  return (
    <StyledModalButton
      className='modal__button'
      overwriteStyles={modalbuttonStyles!}
      onClick={(e: React.MouseEvent): void => updateContent(e, rootContent)}
    >
      {label}
      <ModalElement content={modalContent} action={updateContent} focus={refocus} options={options} />
    </StyledModalButton>
  );
};

export default Modal;
