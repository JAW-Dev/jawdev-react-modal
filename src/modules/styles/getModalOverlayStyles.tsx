// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalOverlayStyles = (modalOverlayStyles: object): object => {
  const defaultStyles = {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  };

  return parseObjectArgs(defaultStyles, modalOverlayStyles);
};

export default getModalOverlayStyles;
