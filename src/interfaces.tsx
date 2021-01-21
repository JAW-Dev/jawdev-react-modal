interface ElementPropsType {
  focusElement?: any,
  options?: any | undefined,
}

interface IndexPropsType {
  children?: any,
  options?: any | undefined,
}

interface ActionType {
  SET_CONTENT: string,
  RESET_CONTENT: string
}

interface PayloadType {
  modalConent: string
}

interface DispatchType {
  type?: string,
  payload?: PayloadType
}

interface UpdateType {
  ACTIONS: ActionType,
  state: any,
  dispatch: (param: DispatchType) => void,
  setModalContent: React.Dispatch<React.SetStateAction<string>>,
  delay: any
}

interface ActionParamType {
  type: string,
  payload: {
    modalConent: any
  }
}

interface StylesType {
  overwriteStyles: object
  delaySpeed?: any
}
