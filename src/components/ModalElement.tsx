// Import packages
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Import modules
import modalCreateRoot from '../modules/modalCreateRoot';
import modalFocusElement from '../modules/modalFocusElement';
import modalKeepFocus from '../modules/modalKeepFocus';

// Import components
import ModalWrap from './ModalWrap';
import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';
import ModalIcon from './ModalIcon';
import ModalIconSvg from './ModalIconSvg';
import ModalIconLabel from './ModalIconLabel';
import ModalClose from './ModalClose';

// Import interfaces
import './../interfaces';

const ModalElement: React.FC<ElementPropsType> = ({ content, action, focus, options }) => {
  modalCreateRoot();

  const [newContent, setNewContent] = useState<string | null>('');

  useEffect(() => {
    setNewContent(content);
  }, [content]);

  if (!newContent) {
    return null;
  }

  const previousFocusedElement = document.activeElement;
  const SetModalCloseImage = options?.modalCloseImage || ModalIconSvg;
  const setModalCloseLabel = options?.modalCloseLabel || 'Close';

  const setSvgprops = {
    options: options,
    svgprops: options?.svgprops
  };

  modalFocusElement();
  modalKeepFocus();

  return createPortal(
    <ModalWrap options={options}>
      <ModalOverlay action={action} focus={focus} focusElement={previousFocusedElement} options={options} />
      <ModalContent options={options}>
        <ModalClose action={action} focus={focus} focusElement={previousFocusedElement} options={options}>
          <ModalIcon options={options}>
            <SetModalCloseImage {...setSvgprops} />
            <ModalIconLabel options={options}>{setModalCloseLabel}</ModalIconLabel>
          </ModalIcon>
        </ModalClose>
        {content}
      </ModalContent>
    </ModalWrap>,
    document.getElementById('modal-root')!
  );
};

export default ModalElement;
