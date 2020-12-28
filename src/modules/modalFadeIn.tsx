const modalFadeIn = (wrap: string, delay: string): void => {
  setTimeout(() => {
    const modalWrap = document.querySelector(wrap);

    if (modalWrap) {
      modalWrap.classList.add('modal-enter');
    }
  });

  setTimeout(() => {
    const modalWrap = document.querySelector(wrap);

    if (modalWrap) {
      modalWrap.classList.remove('modal-enter');
      modalWrap.classList.add('modal-enter-active');
    }
  }, Number(delay));
};

export default modalFadeIn;
