// Import packages
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Import providers
import { useOptions } from './../providers/OptionsProvider';

// Import modules
import modalCreateRoot from '../modules/modalCreateRoot';
import modalFocusElement from '../modules/modalFocusElement';
import modalKeepFocus from '../modules/modalKeepFocus';
import modalFadeIn from '../modules/modalFadeIn';

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

const ModalElement: React.FC<ElementPropsType> = () => {
  modalCreateRoot();

  const options = useOptions();
  const [newContent, setNewContent] = useState<string | null>(options.modalContent);

  if (options.openOnLoad) {
    useEffect(() => {
      setNewContent(options.modalContent);
    });
    modalFadeIn('.modal__wrap', options.delay);
  } else {
    useEffect(() => {
      setNewContent(options.modalContent);
    }, [options.modalContent]);
  }

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
    <ModalWrap>
      <ModalOverlay focusElement={previousFocusedElement} />
      <ModalContent>
        <ModalClose focusElement={previousFocusedElement}>
          <ModalIcon>
            <SetModalCloseImage {...setSvgprops} />
            <ModalIconLabel>{setModalCloseLabel}</ModalIconLabel>
          </ModalIcon>
        </ModalClose>
        {options.modalContent}
      </ModalContent>
    </ModalWrap>,
    document.getElementById('modal-root')!
  );
};

export default ModalElement;
