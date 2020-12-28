// Import packages
import React from 'react';
import styled from 'styled-components';

// Import styles
import { getModalIconLabelStyles } from '../modules/styles';

// Import modeuls
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';

// Import interfaces
import './../interfaces';

const StyledModalIconLabel = styled.span<StylesType>`${props => cssObjectToStyledComponent(getModalIconLabelStyles(props.overwriteStyles))}`;

const ModalIconLabel: React.FC<ElementPropsType> = ({ children, options }) => {
  const modalIconLabelStyles: object | any = options?.modalIconLabelStyles!;

  return (
    <StyledModalIconLabel className='modal__icon-label' overwriteStyles={modalIconLabelStyles!}>
      {children}
    </StyledModalIconLabel>
  );
};

export default ModalIconLabel;
