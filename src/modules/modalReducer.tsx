import './../interfaces';

export const ACTIONS = {
  SET_CONTENT: 'set',
  RESET_CONTENT: 'reset'
};

export const modalReducer = (action: ActionParamType): string => {
  switch (action.type) {
    case ACTIONS.RESET_CONTENT:
      return action.payload.modalConent;
    case ACTIONS.SET_CONTENT:
      return action.payload.modalConent;
    default:
      return '';
  }
};
