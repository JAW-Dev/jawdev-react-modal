const modalFadeOut = (wrap: string): void => {
  const modalWrap = document.querySelector(wrap);

  if (modalWrap) {
    modalWrap.classList.remove('modal-enter-active');
    modalWrap.classList.add('modal-exit');
    modalWrap.classList.remove('modal-exit');
    modalWrap.classList.add('modal-exit-active');
  }
};

export default modalFadeOut;
