// Import modules
import parseObjectArgs from '../parseObjectArgs';

const getModalIconLabelStyles = (modalIconLabelStyles) => {
  const defaultStyles = {
    clip: 'rect(0 0 0 0)',
    overflow: 'hidden',
    position: 'absolute',
    height: '1px',
    width: '1px'
  };

  return parseObjectArgs(defaultStyles, modalIconLabelStyles);
};

export default getModalIconLabelStyles;
