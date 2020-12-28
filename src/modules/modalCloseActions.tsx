const modalCloseActions = (
  action: (e: React.MouseEvent, content: any) => void,
  focus: (focusElement: HTMLElement) => void,
  e: React.MouseEvent,
  focusElement: HTMLElement,
  content: any
): void => {
  action(e, content);
  focus(focusElement);
};

export default modalCloseActions;
