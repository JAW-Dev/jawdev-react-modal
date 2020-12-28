const handleBackwardTab = (e: KeyboardEvent, firstFocusableElements: HTMLElement, lastFocusableElements: HTMLElement ) => {
  if (document.activeElement === firstFocusableElements) {
    e.preventDefault();
    lastFocusableElements.focus();
  }
};

const handleForwardTab = (e: KeyboardEvent, firstFocusableElements: HTMLElement, lastFocusableElements: HTMLElement) => {
  if (document.activeElement === lastFocusableElements) {
    e.preventDefault();
    firstFocusableElements.focus();
  }
};

const modalKeepFocus = () => {
  document.addEventListener('keydown', (e: KeyboardEvent): void => {
    const contentElement: HTMLElement | null = document.querySelector('.modal__content');

    if (!contentElement) {
      return;
    }

    const keyCode: string = e.code;
    let focusableElements: NodeListOf<HTMLElement> = contentElement.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
    );

    focusableElements = Array.prototype.slice.call(focusableElements);

    const firstFocusableElements: HTMLElement = focusableElements[0];
    const lastFocusableElements: HTMLElement = focusableElements[focusableElements.length - 1];
    const focusableElementsCount: number = focusableElements.length;

    switch (keyCode) {
      case 'Tab':
        if (focusableElementsCount === 1) {
          e.preventDefault();
          break;
        }

        if (e.shiftKey) {
          handleBackwardTab(e, firstFocusableElements, lastFocusableElements);
        } else {
          handleForwardTab(e, firstFocusableElements, lastFocusableElements);
        }
        break;
      default:
        break;
    }
  });
};

export default modalKeepFocus;
