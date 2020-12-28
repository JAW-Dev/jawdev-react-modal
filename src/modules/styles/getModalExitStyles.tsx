// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalExitStyles = (modalExitStyles: object): object => {
  const defaultStyles = {
    opacity: '1'
  };

  return parseObjectArgs(defaultStyles, modalExitStyles);
};

export default getModalExitStyles;
