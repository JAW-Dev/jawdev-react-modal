const modalCreateRoot = () => {
  const getBody = document.getElementsByTagName('body');
  const hasModalRoot = document.getElementById('modal-root');

  if (hasModalRoot) {
    return;
  }

  let body;

  if (getBody.length > 0) {
    body = getBody[0];
  }

  const modalRoot = document.createElement('DIV');

  modalRoot.setAttribute('id', 'modal-root');
  body.appendChild(modalRoot);
};

export default modalCreateRoot;
