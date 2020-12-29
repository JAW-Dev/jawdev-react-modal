// Import modules
import parseObjectArgs from './parseObjectArgs';

const getModalStyles = (custom: object, defaults: object = {}): object => {
  if (defaults) {
    return parseObjectArgs(defaults, custom);
  }

  return custom;
};

export default getModalStyles;
