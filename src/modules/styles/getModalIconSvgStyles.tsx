// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalIconSvgStyles = (modalIconSvgStyles) => {
  const defaultStyles = {
    transition: 'fill 0.2s ease',
    ':hover': {
      fill: 'rgb(230, 230, 230)',
      transition: 'fill 0.2s ease'
    }
  };

  return parseObjectArgs(defaultStyles, modalIconSvgStyles);
};

export default getModalIconSvgStyles;
