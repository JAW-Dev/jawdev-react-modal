// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalWrapStyles = (modalWrapStyles: object, delay: number): object => {
  const defaultStyles = {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    zIndex: '10',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0',
    transition: `opacity ${delay}ms linear`,
    '&.modal-enter': {
      opacity: '0'
    },
    '&.modal-enter-active': {
      opacity: '1 !important'
    },
    '&.modal-exit': {
      opacity: '1'
    },
    '&.modal-exit-active': {
      opacity: '0'
    }
  };

  return parseObjectArgs(defaultStyles, modalWrapStyles);
};

export default getModalWrapStyles;
