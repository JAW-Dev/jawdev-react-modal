const modalCloseEsc = (updateContent: (mouseEvent: React.MouseEvent, content: any) => void, refocus: (focusElement: HTMLElement) => void, focusElement: HTMLElement) => {
  document.addEventListener('keydown', (e: KeyboardEvent) => (mouseEvent: React.MouseEvent, content: any) => {
    const keyCode = e.code;

    if (keyCode === 'Escape') {
      updateContent(mouseEvent, content);
      refocus(focusElement);
    }
  });
};

export default modalCloseEsc;
