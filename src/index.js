import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import 'react-tutorial-stepper/dist/index.css'
import PropTypes from 'prop-types'

export const Tutorial = (props) => {
  const [step, setStep] = useState(0)
  const [elements, setElements] = useState([...props.elements])
  const [descriptions, setDescriptions] = useState([...props.descriptions])
  const [openTutorial, setOpenTutorial] = useState(props.openTutorial ?? false)
  const ref = useRef()

  let prevElementPosition
  let prevElementZIndex

  const changeTutorialDescriptionPosition = (currentStep = 0) => {
    const currentElement = document.getElementById(elements[currentStep])

    currentElement.style.position = 'relative'
    currentElement.style.zIndex = '9999'

    // Entire screen hreight length
    const windowScreenHeight = document.scrollingElement.scrollHeight

    const cardLeftPosition =
      currentElement.offsetLeft +
      currentElement.offsetWidth / 2 -
      ref.current.offsetWidth / 2

    const cardTopPosition =
      currentElement.offsetTop < windowScreenHeight / 2
        ? currentElement.offsetTop + currentElement.offsetHeight + 20
        : currentElement.offsetTop - ref.current.offsetHeight - 20

    /* Description card left position */
    ref.current.style.left = `${cardLeftPosition}px`

    /* Description card top position */
    ref.current.style.top = `${cardTopPosition}px`

    // Clear previous element added style
    if (currentStep !== step) {
      const prevElement = document.getElementById(elements[step])
      prevElement.style.position = prevElementPosition
      prevElement.style.zIndex = prevElementZIndex
    }

    prevElementPosition = currentElement.style.position
    prevElementZIndex = currentElement.style.zIndex

    setStep(currentStep)
    window.scroll({
      top: currentElement.offsetTop - currentElement.offsetHeight / 2,
      left: 0,
      behavior: 'smooth'
    })
  }

  const clearAllStyle = () => {
    elements.forEach((id) => {
      const element = document.getElementById(id)
      element.style.position = prevElementPosition
      element.style.zIndex = prevElementZIndex
    })
    setOpenTutorial(false)
    props.onClose()
  }

  useEffect(() => {
    props.openTutorial && changeTutorialDescriptionPosition()
  }, [])

  return openTutorial ? (
    <div>
      <div className={styles.Wrapper}></div>
      <div
        className={styles.CloseButtonContainer}
        onClick={() => {
          clearAllStyle()
        }}
      >
        X
      </div>

      <div className={styles.TutorialContainer} ref={ref}>
        <p>{descriptions[step]}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <button
            className={styles.button}
            style={{
              background: props.buttonBackgroundColor,
              color: props.buttonFontColor
            }}
            disabled={step === 0}
            onClick={() => {
              changeTutorialDescriptionPosition(step - 1)
            }}
          >
            {props.prevButtonTitle}
          </button>
          <span style={{ color: 'gray' }}>
            {step + 1}/{descriptions.length}
          </span>
          <button
            className={styles.button}
            style={{
              background: props.buttonBackgroundColor,
              color: props.buttonFontColor
            }}
            onClick={() => {
              if (step < elements.length - 1) {
                changeTutorialDescriptionPosition(step + 1)
              } else {
                clearAllStyle()
              }
            }}
          >
            {step < elements.length - 1
              ? props.nextButtonTitle
              : props.lastStepButtonTitle}
          </button>
        </div>
      </div>
    </div>
  ) : null
}

Tutorial.propTypes = {
  openTutorial: PropTypes.bool.isRequired,
  elements: PropTypes.array.isRequired,
  descriptions: PropTypes.array.isRequired,
  prevButtonTitle: PropTypes.string.isRequired,
  nextButtonTitle: PropTypes.string.isRequired,
  lastStepButtonTitle: PropTypes.string.isRequired,
  buttonBackgroundColor: PropTypes.string,
  buttonFontColor: PropTypes.string
}

export default Tutorial
