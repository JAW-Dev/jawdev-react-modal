// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalEnterStyles = (modalEnterStyles: object): object => {
  const defaultStyles: object = {
    opacity: '0'
  };

  return parseObjectArgs(defaultStyles, modalEnterStyles);
};

export default getModalEnterStyles;
