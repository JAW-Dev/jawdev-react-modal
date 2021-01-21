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

## Options

| Option              | Description                                                                                                            | Type    | default     |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| label               | The text in the main modal button                                                                                      | string  | 'Open'      |
| delay               | By defaul the modal opens/closes with a fade in/out. The delay id how long the fade in/out takes                       | integer | 200         |
| content             | You can use a string for the modal content instead of an React component                                               | string  | ''          |
| svgprops            | By default the modal close icon is a SVG. This option will allow you to set the SVG attributes such as with and height | object  | {}          |
| modalCloseImage     | Overwrite the default Close Icon image                                                                                 | string  | default svg |
| modalCloseLabel     | Overwrite the default Close Label (hidden for accesiblility be default)                                                | string  | 'Close'     |
| overlayCloseOnClick | Close the modal on overlay click                                                                                       | boolean | true        |
| overlayCloseOnClick | Close the modal on overlay click                                                                                       | boolean | true        |
| closeOnButtonClick  | Close the modal on close button click                                                                                  | boolean | true        |
| openOnLoad          | Open the Modal on page load                                                                                            | boolean | false       |
| showButton          | Show the modal open button                                                                                             | boolean | true        |
| showCloseButton     | Show the modal close button                                                                                            | boolean | true        |

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
