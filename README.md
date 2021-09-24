# react-tutorial-stepper

> A Tutorial Stepper component for React Applications

[![NPM](https://img.shields.io/npm/v/react-tutorial-stepper.svg)](https://www.npmjs.com/package/react-tutorial-stepper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

When you make updates for your React application, you can show your customers what' s news step by step.

## Install

```bash
npm install --save react-tutorial-stepper
```

## Usage

```jsx
import React, { Component } from 'react'

import Tutorial from 'react-tutorial-stepper'

class ReactTutorialStepper extends Component {
  render() {
    return (
      <Tutorial
        openTutorial={true}
        elements={['id']} // elements={[<ids of elements>]}
        descriptions={['This is a description.']} // descriptions={[<descriptions of steps>]}
        prevButtonTitle="Prev"
        nextButtonTitle="Next"
        lastStepButtonTitle="Finish"
        onClick={() => { console.log("End of the tutorial"); }}
      />
    )
  }
}
```
## Props

| Prop                   | Type                | Required | Default       | Note                                                                                                                                                                                                         |
| ---------------------- | ------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| openTutorial           | boolean             | Yes      | false         | Open(true)/close(false) the tutorial.                                                                                                                                                                         |
| elements               | Array-String-       | Yes      |               | Element id list.                                                                                                                                                                                             |
| descriptions           | Array-String-       | Yes      |               | Description list for each step. Descriptions depend on id order. They will be dispayed at each step.
| prevButtonTitle        | String              | Yes      |               | Title for previous button.  |
| nextButtonTitle        | String              | Yes      |               | Title for next button.
| lastStepButtonTitle    | String              | Yes      |               | Button title for last step.
| onClose                | Function            | Yes      |               | Function will be executed after closing tutorial.
                                                
## License

MIT © [BatuhanAydonerDev](https://github.com/BatuhanAydonerDev)
