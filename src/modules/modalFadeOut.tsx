const modalFadeOut = (wrap: string, delay: number): void => {
  const modalWrap = document.querySelector(wrap);

  if (modalWrap) {
    modalWrap.classList.remove('modal-enter-active');
    modalWrap.classList.add('modal-exit');
    modalWrap.classList.remove('modal-exit');
    modalWrap.classList.add('modal-exit-active');

    setTimeout(() => {
      modalWrap.classList.remove('modal-exit-active');
    }, Number(delay));
  }
};

export default modalFadeOut;
