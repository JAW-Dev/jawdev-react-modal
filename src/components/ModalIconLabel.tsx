// Import packages
import React from 'react';
import styled from 'styled-components';

// Import providers
import { useOptions } from './../providers/OptionsProvider';

// Import modeuls
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';
import getModalStyles from './../modules/getModalStyles';

// Import interfaces
import './../interfaces';

const defaultStyles = {
  clip: 'rect(0 0 0 0)',
  overflow: 'hidden',
  position: 'absolute',
  height: '1px',
  width: '1px'
};

const StyledModalIconLabel = styled.span<StylesType>`${props => cssObjectToStyledComponent(getModalStyles(props.overwriteStyles, defaultStyles))}`;

const ModalIconLabel: React.FC<ElementPropsType> = ({ children }) => {
  const options = useOptions();
  const modalIconLabelStyles: object | any = options?.modalIconLabelStyles!;

  return (
    <StyledModalIconLabel className='modal__icon-label' overwriteStyles={modalIconLabelStyles!}>
      {children}
    </StyledModalIconLabel>
  );
};

export default ModalIconLabel;
