// Import packages
import React from 'react';
import styled from 'styled-components';

// Import modules
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';
import getModalWrapStyles from '../modules/getModalWrapStyles';

// Import providers
import { useOptions } from './../providers/OptionsProvider';

// Import interfaces
import './../interfaces';

const StyledModalWrap = styled.div.attrs(props => ({ className: props.className })) <StylesType>`
  ${props => {
    return cssObjectToStyledComponent(getModalWrapStyles(props.overwriteStyles, props.delaySpeed));
  }}
`;

const ModalWrap: React.FC<ElementPropsType> = ({ children }) => {
  const options = useOptions();

  const delay: number = options?.delay!;
  const modalWrapStyles: object | any = options?.modalWrapStyles!;

  return (
    <div>
      <StyledModalWrap className='modal__wrap' overwriteStyles={modalWrapStyles} delaySpeed={delay} role='dialog'>
        {children}
      </StyledModalWrap>
    </div>
  );
};

export default ModalWrap;
