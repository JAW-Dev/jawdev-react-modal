// Import modules
import modalGetActionPayload from './modalGetActionPayload';
import modalFadeOut from './modalFadeOut';
import modalFadeIn from './modalFadeIn';

import './../interfaces';

const modalUpdate = (e: React.MouseEvent, content: any, { ACTIONS, state, dispatch, setModalContent, delay }: UpdateType) => {
  e.stopPropagation();

  const update: object | any = modalGetActionPayload(content, ACTIONS);
  const wrap = '.modal__wrap';

  dispatch({
    type: update.action,
    payload: { modalConent: update.payload }
  });

  if (update.action === ACTIONS.RESET_CONTENT) {
    modalFadeOut(wrap);
    setTimeout(() => {
      setModalContent(update.payload);
      return state;
    }, Number(delay));
  } else {
    setModalContent(update.payload);
    modalFadeIn(wrap, delay);
    return state;
  }
};

export default modalUpdate;
