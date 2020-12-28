# @jawdev/react-modal

> A simple React modal

## Install

```bash
npm install --save @jaw-dev/react-modal

yarn add @jaw-dev/react-modal
```

## Usage

```tsx
import React, { Component } from 'react';

import Modal from 'jawdev-react-modal';

class Example extends Component {
  render() {
    return (
      <Modal>
        <ModalContentComponent />
      </Modal>
    );
  }
}
```

## Props

| Prop Name         | Description                                                              | Type   | default |
| ----------------- | ------------------------------------------------------------------------ | ------ | ------- |
| content           | You can use a string for the modal content instead of an React component | string | ''      |
| modalbuttonStyles | Overwrite the default button styles                                      | object | {}      |
| options           | The modal options                                                        | object | {}      |

## Options

| Option                 | Description                                                                                                            | Type    | default     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| label                  | The text in the main modal button                                                                                      | string  | 'Open'      |
| content                | Use a string for the modal content. This is can be used in place of the 'content' prop                                 | string  | ''          |
| delay                  | By defaul the modal opens/closes with a fade in/out. The delay id how long the fade in/out takes                       | integer | 200         |
| svgprops               | By default the modal close icon is a SVG. This option will allow you to set the SVG attributes such as with and height | object  | {}          |
| modalCloseImage        | Overwrite the default Close Icon image                                                                                 | string  | default svg |
| modalCloseLabel        | Overwrite the default Close Label (hidden for accesiblility be default)                                                | string  | 'Close'     |
| modalCloseStyles       | Overwrite the default CSS for the Close Icon and Label wrapper\*                                                       | object  | {}          |
| modalContentStyles     | Overwrite the default CSS for the Content element\*                                                                    | object  | {}          |
| modalEnterActiveStyles | Overwrite the default CSS for the styles used in opening the modal\*                                                   | object  | {}          |
| modalEnterStyles       | Overwrite the default CSS for the styles used in opening the modal\*                                                   | object  | {}          |
| modalExitActiveStyles  | Overwrite the default CSS for the styles used in closing the modal\*                                                   | object  | {}          |
| modalExitStyles        | Overwrite the default CSS for the styles used in closing the modal\*                                                   | object  | {}          |
| modalIconLabelStyles   | Overwrite the default CSS for the Close Icon Label\*                                                                   | object  | {}          |
| modalIconStyles        | Overwrite the default CSS for the Close Icon\*                                                                         | object  | {}          |
| modalIconSvgStyles     | Overwrite the default CSS for the default Close Icon SVG\*                                                             | object  | {}          |
| modalOverlayStyles     | Overwrite the default CSS for the Overlay\*                                                                            | object  | {}          |
| modalWrapStyles        | Overwrite the default CSS for the Modal Wrap\*                                                                         | object  | {}          |

\*\* [Style Components](https://styled-components.com/) is used for generating the CSS to allow for the use of CSS pseudo selectors.
To overwrite a component's CSS, create a object with the CSS you want to overwrite.

```javascript
const newModalCloseStyles = {
  top: '1rem',
  right: '1rem',
  padding: '1rem',
  backgroundColor: 'black',
  ':hover': {
    cursor: 'grab'
  }
};
```
