import React, { useState } from 'react'
import NutrientForm from './NutrientForm'
import MetabolizableEnergyTable from './MetabolizableEnergyTable'
import DryMatterBasisTable from './DryMatterBasisTable'
import CalciumToPhosphorusRatioResult from './CalciumToPhosphorusRatioResult'

const NutrientCalculation = () => {
  const [metabolizableEnergy, setMetabolizableEnergy] = useState({
    proteinProportion: 0,
    fatProportion: 0,
    carbsProportion: 0,
  })

  const [dryMatterBasis, setDryMatterBasis] = useState({
    dryProteinProportion: 0,
    dryFatProportion: 0,
    dryCarbsProportion: 0,
  })

  const [calciumRatio, setCalciumRatio] = useState(0)

  const getMetabolizableEnergy = ({
    proteinProportion,
    fatProportion,
    carbsProportion,
  }) => {
    setMetabolizableEnergy({
      proteinProportion,
      fatProportion,
      carbsProportion,
    })
  }

  const getDryMatterBasis = ({
    dryProteinProportion,
    dryFatProportion,
    dryCarbsProportion,
  }) => {
    setDryMatterBasis({
      dryProteinProportion,
      dryFatProportion,
      dryCarbsProportion,
    })
  }

  const getCalciumRatio = (calciumRatio) => {
    setCalciumRatio(calciumRatio)
  }

  return (
    <>
      <NutrientForm
        getMetabolizableEnergy={getMetabolizableEnergy}
        getDryMatterBasis={getDryMatterBasis}
        getCalciumRatio={getCalciumRatio}
      />
      <MetabolizableEnergyTable metabolizableEnergy={metabolizableEnergy} />
      <DryMatterBasisTable dryMatterBasis={dryMatterBasis} />
      <CalciumToPhosphorusRatioResult calciumRatio={calciumRatio} />
    </>
  )
}

export default NutrientCalculation
