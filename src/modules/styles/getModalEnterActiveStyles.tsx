// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalEnterActiveStyles = (modalEnterActiveStyles: object, delay: number): object => {
  const defaultStyles = {
    opacity: '1 !important',
    transition: `opacity ${delay}ms linear`
  };

  return parseObjectArgs(defaultStyles, modalEnterActiveStyles);
};

export default getModalEnterActiveStyles;
