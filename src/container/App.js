import './App.css'
import CaloriesForm from '../components/CaloriesForm'
import NutrientForm from '../components/NutrientForm'
import Divider from '@mui/material/Divider'

import ReactGA from 'react-ga4'

function App() {
  const trackingId = 'G-W0D22GZYML'
  ReactGA.initialize(trackingId)
  ReactGA.send({ hitType: 'pageview', page: '/' })

  return (
    <div className="App">
      <CaloriesForm />
      <Divider variant="middle" />
      <NutrientForm />
    </div>
  )
}

export default App
