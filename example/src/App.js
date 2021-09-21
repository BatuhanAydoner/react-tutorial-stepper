import React from 'react'

import { Tutorial } from 'react-tutorial-stepper'

const App = () => {
  return (
    <div>
      <p id='p'>It is a paragraph</p>
      <Tutorial
        openTutorial={true}
        elements={['p']}
        descriptions={['It is a paragraph']}
        prevButtonTitle={'Önceki'}
        nextButtonTitle={'Sonraki'}
        lastStepButtonTitle={'Bitir'}
      />
    </div>
  )
}

export default App
