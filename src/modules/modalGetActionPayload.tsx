import './../interfaces';

const modalGetActionPayload = (content: any, actions: ActionType): object => {
  let payload = '';
  let action = '';

  if (content) {
    action = actions.SET_CONTENT;
    payload = content;
  } else {
    action = actions.RESET_CONTENT;
    payload = '';
  }

  return {
    payload,
    action
  };
};

export default modalGetActionPayload;
