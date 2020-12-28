// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalExitActiveStyles = (modalExitActiveStyles: object, delay: number): object => {
  const defaultStyles = {
    opacity: '0',
    transition: `opacity ${delay}ms linear`
  };

  return parseObjectArgs(defaultStyles, modalExitActiveStyles);
};

export default getModalExitActiveStyles;
