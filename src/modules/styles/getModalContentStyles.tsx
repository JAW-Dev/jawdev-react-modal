// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalContentStyles = (modalContentStyles) => {
  const defaultStyles = {
    position: 'relative',
    zIndex: '20',
    padding: '2rem',
    backgroundColor: 'white'
  };

  return parseObjectArgs(defaultStyles, modalContentStyles);
};

export default getModalContentStyles;
