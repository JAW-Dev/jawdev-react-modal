// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalCloseStyles = (modalCloseStyles) => {
  const defaultStyles = {
    position: 'absolute',
    top: '0.25rem',
    right: '0.25rem',
    padding: '0',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    ':hover': {
      cursor: 'pointer'
    }
  };

  return parseObjectArgs(defaultStyles, modalCloseStyles);
};

export default getModalCloseStyles;
