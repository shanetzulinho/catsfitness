import React from 'react'

import './App.css'
import CaloriesCalculation from './components/calories/CaloriesCalculation'
import NutrientCalculation from './components/nutrient/NutrientCalculation'

import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'

import ReactGA from 'react-ga4'

function App() {
  const trackingId = 'G-W0D22GZYML'
  ReactGA.initialize(trackingId)
  ReactGA.send({ hitType: 'pageview', page: 'https://mycatsfitness.netlify.app/' })

  return (
    <div className="App">
      <Container maxWidth="md">
        <CaloriesCalculation />
        <Divider variant="middle" />
        <NutrientCalculation />
      </Container>
    </div>
  )
}

export default App
