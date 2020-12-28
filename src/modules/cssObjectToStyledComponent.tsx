const cssObjectToStyledComponent = (object: object): string[] => {
  const cssString: string[] = Object.entries(object).map(([key, value]): string => {
    key = key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);

    if (typeof value === 'object') {
      const subValue = cssObjectToStyledComponent(value);
      return `${key} {${subValue}}`;
    }

    return `${key}: ${value};`;
  });

  return cssString;
};

export default cssObjectToStyledComponent;
