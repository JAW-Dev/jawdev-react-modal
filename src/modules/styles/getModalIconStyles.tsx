// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalIconStyles = (modalIconStyles) => {
  const defaultStyles = {
    ':hover': {
      cursor: 'pointer'
    }
  };

  return parseObjectArgs(defaultStyles, modalIconStyles);
};

export default getModalIconStyles;
