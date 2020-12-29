// Import packages
import React from 'react';
import styled from 'styled-components';

// Import modules
import cssObjectToStyledComponent from './../modules/cssObjectToStyledComponent';
import getModalStyles from './../modules/getModalStyles';

// Import interfaces
import './../interfaces';

const defaultStyles = {
  transition: 'fill 0.2s ease',
  ':hover': {
    fill: 'rgb(230, 230, 230)',
    transition: 'fill 0.2s ease'
  }
};

const StyledModalIconSvg = styled.svg<StylesType>`${props => cssObjectToStyledComponent(getModalStyles(props.overwriteStyles, defaultStyles))}`;

const ModalIconSvg: React.FC<ElementPropsType> = ({ options }) => {
  const modalIconSvgStyles: object | any = options?.modalIconSvgStyles!;
  const svgprops: object | any = options?.svgprops!;

  return (
    <StyledModalIconSvg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      className='modal__icon-svg'
      width='1.5em'
      height='1.5em'
      overwriteStyles={modalIconSvgStyles!}
      {...svgprops}
    >
      <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z' />
    </StyledModalIconSvg>
  );
};

export default ModalIconSvg;
