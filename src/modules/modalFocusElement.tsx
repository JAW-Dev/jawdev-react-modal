const modalFocusElement = () => {
  setTimeout((): void => {
    const contentElement = document.querySelector('.modal__content');

    if (!contentElement) {
      return;
    }

    const selectors: string = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
    let focusableElements: NodeListOf<HTMLElement> = contentElement.querySelectorAll(selectors);
    focusableElements = Array.prototype.slice.call(focusableElements);
    const firstFocusableElements: HTMLElement = focusableElements[0];
    firstFocusableElements.focus();
  });
};

export default modalFocusElement;
