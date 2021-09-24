# react-tutorial-stepper

> A Tutorial Stepper component for React

[![NPM](https://img.shields.io/npm/v/react-tutorial-stepper.svg)](https://www.npmjs.com/package/react-tutorial-stepper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
        id={['id']}
        description={['This is a description.']}
        prevButtonTitle={'Prev'}
        nextButtonTitle={'Next'}
        lastStepButtonTitle={'Finish'}
      />
    )
  }
}
```

## License

MIT © [BatuhanAydonerDev](https://github.com/BatuhanAydonerDev)
