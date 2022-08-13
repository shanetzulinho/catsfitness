import { useState } from 'react'

import './App.css'
import CaloriesForm from '../components/CaloriesForm'
import CaloriesResult from '../components/CaloriesResult'
import NutrientForm from '../components/NutrientForm'

import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

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

  return (
    <div className="App">
      <Container maxWidth="md">
        <CaloriesForm getLowerUpperBound={getLowerUpperBound} />
        <CaloriesResult lowerUpperBound={lowerUpperBound} />
        <Divider variant="middle" />
        <NutrientForm />
      </Container>
    </div>
  )
}

export default App
