import './../interfaces';

const parseObjectArgs = (object: object, overwrite: object): object => {
  if (overwrite) {
    if (Object.keys(object).length > 0) {
      const objKeys = Object.keys(object);

      for (let i = 0; i < objKeys.length; i++) {
        if (objKeys[i] in overwrite) {
          object[objKeys[i]] = overwrite[objKeys[i]];
        }
      }

      return object;
    }
    return overwrite;
  }

  return object;
};

export default parseObjectArgs;
