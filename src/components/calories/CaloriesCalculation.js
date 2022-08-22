import React, { useState } from 'react'
import CaloriesForm from './CaloriesForm'
import CaloriesResult from './CaloriesResult'

const CaloriesCalculation = () => {
  const [lowerUpperBound, setLowerUpperBound] = useState({
    lowerBound: 0,
    upperBound: 0,
  })

  const getLowerUpperBound = ({ lowerBound, upperBound }) => {
    setLowerUpperBound({ lowerBound, upperBound })
  }
  return (
    <>
      <CaloriesForm getLowerUpperBound={getLowerUpperBound} />
      <CaloriesResult lowerUpperBound={lowerUpperBound} />
    </>
  )
}

export default CaloriesCalculation
