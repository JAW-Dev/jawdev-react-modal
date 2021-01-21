// Import packages
import React from 'react'
import {
  DMPBlurb,
  DMPContent,
  DMPExample,
  DMPFooter,
  DMPHeader,
  DMPInstall,
  DMPWrap,
  DMPLogo,
  DMPTable,
  DMPGHLink,
} from '@jaw-dev/react-demo-components';
import styled from 'styled-components';

// Import package.json
import pkg from './../package.json';


// Import components
import Modal from 'jawdev-react-modal'

const StyledTestLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`;

const StyledTestInput = styled.input`
  width: 300px;
  padding: 0.25rem;
`;

const ComponentContent = () => {
  return (
    <>
      <h2>Example Modal</h2>
      <p>
        <StyledTestLabel>Name</StyledTestLabel>
        <StyledTestInput type="text" defaultValue='' />
      </p>
      <p>
        <StyledTestLabel>Email</StyledTestLabel>
        <StyledTestInput type="email" defaultValue='' />
      </p>
      <p>
        <button onClick={(e) => { e.stopPropagation() }}>Submit</button>
      </p>
    </>
  )
}

const optionsTable = `
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
`;

const example = `
  import Modal from '@jaw-dev/react-modal';

  const App = () => {
    const yourOptions = {...}
    const buttonStyles = {
      backgroundColor: 'blue'
    }

    return (
      <div>
        <Modal options={yourOptions} modalbuttonStyles={buttonStyles}>
          <YourComponent/>
        </Modal>
      </div>
    );
  }
`;

const App = () => {
  const buttonStyles = {
    outline: 'none',
    backgroundColor: 'rgb(230,230,230)',
    border: '1px solid rgb(230,230,230)',
    padding: '0.5rem',
    borderRadius: '5px',
    color: 'rgb(26,26,26)',
    ':hover': {
      cursor: 'pointer'
    }
  }

  const options = {
    label: 'Open Modal',
    delay: 300,
    closeOnOverlayClick: true,
    closeOnButtonClick: true,
    modalbuttonStyles: buttonStyles
  }

  return (
    <DMPWrap>
      <DMPHeader>
        <DMPLogo logo="@JAW-Dev React Modal" />
        <DMPGHLink link='https://github.com/JAW-Dev/jawdev-react-modal' />
      </DMPHeader>
      <DMPContent>
        <DMPBlurb>
          <p>A simple React modal component</p>
        </DMPBlurb>
        <DMPInstall name={pkg.name} />
        <DMPExample code={example} />
        <DMPBlurb>
          <Modal options={options}><ComponentContent /></Modal>
        </DMPBlurb>
        <DMPTable table={optionsTable} name={'Options'} />
      </DMPContent>
      <DMPFooter />
    </DMPWrap>
  );
}

export default App
