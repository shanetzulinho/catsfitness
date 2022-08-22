import React from 'react'

import './App.css'
import CaloriesCalculation from './components/calories/CaloriesCalculation'
import NutrientCalculation from './components/nutrient/NutrientCalculation'

import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'

import ReactGA from 'react-ga4'

function App() {
  const trackingId = process.env.REACT_APP_GA_TRACKING_ID
  ReactGA.initialize(trackingId)
  ReactGA.send({ hitType: 'pageview', page: process.env.REACT_APP_URL })

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
