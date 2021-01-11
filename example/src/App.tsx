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

const props = `
| Prop Name         | Description                                                              | Type   | default |
| ----------------- | ------------------------------------------------------------------------ | ------ | ------- |
| content           | You can use a string for the modal content instead of an React component | string | ''      |
| modalbuttonStyles | Overwrite the default button styles                                      | object | {}      |
| options           | The modal options                                                        | object | {}      |
`;

const optionsTable = `
| Option                 | Description                                                                                                            | Type    | default     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| label                  | The text in the main modal button                                                                                      | string  | 'Open'      |
| content                | Use a string for the modal content. This is can be used in place of the 'content' prop                                 | string  | ''          |
| delay                  | By defaul the modal opens/closes with a fade in/out. The delay id how long the fade in/out takes                       | integer | 200         |
| svgprops               | By default the modal close icon is a SVG. This option will allow you to set the SVG attributes such as with and height | object  | {}          |
| modalCloseImage        | Overwrite the default Close Icon image                                                                                 | string  | default svg |
| modalCloseLabel        | Overwrite the default Close Label (hidden for accesiblility be default)                                                | string  | 'Close'     |
| modalCloseStyles       | Overwrite the default CSS for the Close Icon and Label wrapper*                                                       | object  | {}          |
| modalContentStyles     | Overwrite the default CSS for the Content element*                                                                    | object  | {}          |
| modalEnterActiveStyles | Overwrite the default CSS for the styles used in opening the modal*                                                   | object  | {}          |
| modalEnterStyles       | Overwrite the default CSS for the styles used in opening the modal*                                                   | object  | {}          |
| modalExitActiveStyles  | Overwrite the default CSS for the styles used in closing the modal*                                                   | object  | {}          |
| modalExitStyles        | Overwrite the default CSS for the styles used in closing the modal*                                                   | object  | {}          |
| modalIconLabelStyles   | Overwrite the default CSS for the Close Icon Label*                                                                   | object  | {}          |
| modalIconStyles        | Overwrite the default CSS for the Close Icon*                                                                         | object  | {}          |
| modalIconSvgStyles     | Overwrite the default CSS for the default Close Icon SVG*                                                             | object  | {}          |
| modalOverlayStyles     | Overwrite the default CSS for the Overlay*                                                                            | object  | {}          |
| modalWrapStyles        | Overwrite the default CSS for the Modal Wrap*                                                                         | object  | {}          |
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

const cssExample = `
  const newModalCloseStyles = {
    top: '1rem',
    right: '1rem',
    padding: '1rem',
    backgroundColor: 'black',
    ':hover': {
      cursor: 'grab'
    }
  };
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
          <Modal options={options} modalbuttonStyles={buttonStyles}><ComponentContent /></Modal>
        </DMPBlurb>
        <DMPTable table={props} name={'Props'} />
        <DMPTable table={optionsTable} name={'Options'} />
        <DMPBlurb>
          <p>* Style Components is used for generating the CSS to allow for the use of CSS pseudo selectors. To overwrite a component's CSS, create a object with the CSS you want to overwrite.</p>
        </DMPBlurb>
        <DMPExample code={cssExample} label="CSS Overwrite Example" />
      </DMPContent>
      <DMPFooter />
    </DMPWrap>
  );
}

export default App
