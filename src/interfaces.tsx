interface OptionsType {
  children?: React.ReactNode | string,
  label?: string,
  content?: string | object,
  delay?: number,
  svgprops?: object,
  action?: (e: React.MouseEvent, content: any) => void | object,
  focus?: (focusElement: HTMLElement) => void | object,
  focusElement?: HTMLElement,
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
  content: any,
  action: (e: React.MouseEvent, content: any) => void,
  focus: (focusElement: HTMLElement) => void,
  focusElement?: HTMLElement,
  options?: OptionsType | undefined,
}

interface IndexPropsType {
  content?: string,
  modalbuttonStyles?: object,
  children?: React.ReactNode | string,
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
