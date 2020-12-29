interface OptionsType {
  children?: any,
  label?: string,
  content?: any,
  delay?: number,
  svgprops?: object,
  action?: any,
  focus?: any,
  focusElement?: any,
  modalCloseImage?: any,
  modalCloseLabel?: string,
  modalCloseStyles?: object,
  modalContentStyles?: object,
  modalEnterActiveStyles?: object,
  modalEnterStyles?: object,
  modalExitActiveStyles?: object,
  modalExitStyles?: object,
  modalIconLabelStyles?: object,
  modalIconStyles?: object,
  modalIconSvgStyles?: object,
  modalOverlayStyles?: object,
  modalWrapStyles?: object
}

interface ElementPropsType {
  content?: any,
  action?: any,
  focus?: any,
  focusElement?: any,
  options?: OptionsType | undefined,
}

interface IndexPropsType {
  content?: string,
  modalbuttonStyles?: object,
  children?: any,
  options?: OptionsType | undefined,
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
  delay: string
}

interface ActionParamType {
  type: string,
  payload: {
    modalConent: any
  }
}

interface StylesType {
  overwriteStyles: object
  delaySpeed?: number | any
}
