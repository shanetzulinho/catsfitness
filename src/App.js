import { useState } from 'react'

import './App.css'
import CaloriesForm from './components/calories/CaloriesForm'
import CaloriesResult from './components/calories/CaloriesResult'
import NutrientForm from './components/nutrient/NutrientForm'
import MetabolizableEnergyTable from './components/nutrient/MetabolizableEnergyTable'
import DryMatterBasisTable from './components/nutrient/DryMatterBasisTable'
import CalciumToPhosphorusRatioResult from './components/nutrient/CalciumToPhosphorusRatioResult'

import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'

import ReactGA from 'react-ga4'

function App() {
  const trackingId = 'G-W0D22GZYML'
  ReactGA.initialize(trackingId)
  ReactGA.send({ hitType: 'pageview', page: 'https://mycatsfitness.netlify.app/' })

  const [lowerUpperBound, setLowerUpperBound] = useState({
    lowerBound: 0,
    upperBound: 0,
  })

  const getLowerUpperBound = ({ lowerBound, upperBound }) => {
    setLowerUpperBound({ lowerBound: lowerBound, upperBound: upperBound })
  }

  const [metabolizableEnergy, setMetabolizableEnergy] = useState({
    proteinProportion: 0,
    fatProportion: 0,
    carbsProportion: 0,
  })

  const getMetabolizableEnergy = ({
    proteinProportion,
    fatProportion,
    carbsProportion,
  }) => {
    setMetabolizableEnergy({
      proteinProportion: proteinProportion,
      fatProportion: fatProportion,
      carbsProportion: carbsProportion,
    })
  }

  const [dryMatterBasis, setDryMatterBasis] = useState({
    dryProteinProportion: 0,
    dryFatProportion: 0,
    dryCarbsProportion: 0,
  })

  const getDryMatterBasis = ({
    dryProteinProportion,
    dryFatProportion,
    dryCarbsProportion,
  }) => {
    setDryMatterBasis({
      dryProteinProportion: dryProteinProportion,
      dryFatProportion: dryFatProportion,
      dryCarbsProportion: dryCarbsProportion,
    })
  }

  const [calciumRatio, setCalciumRatio] = useState(0)

  const getCalciumRatio = (calciumRatio) => {
    setCalciumRatio(calciumRatio)
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <CaloriesForm getLowerUpperBound={getLowerUpperBound} />
        <CaloriesResult lowerUpperBound={lowerUpperBound} />
        <Divider variant="middle" />
        <NutrientForm
          getMetabolizableEnergy={getMetabolizableEnergy}
          getDryMatterBasis={getDryMatterBasis}
          getCalciumRatio={getCalciumRatio}
        />
        <div className="NutrientResults">
          <MetabolizableEnergyTable metabolizableEnergy={metabolizableEnergy} />
          <DryMatterBasisTable dryMatterBasis={dryMatterBasis} />
          <CalciumToPhosphorusRatioResult calciumRatio={calciumRatio} />
        </div>
      </Container>
    </div>
  )
}

export default App
