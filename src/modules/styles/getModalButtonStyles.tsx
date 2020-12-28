// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalButtonStyles = (modalbuttonStyles) => {
  const defaultStyles = {};

  return parseObjectArgs(defaultStyles, modalbuttonStyles);
};

export default getModalButtonStyles;
