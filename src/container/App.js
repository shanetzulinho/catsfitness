import './App.css'
import CaloriesForm from '../components/CaloriesForm'
import NutrientForm from '../components/NutrientForm'
import Divider from '@mui/material/Divider'

import ReactGA from 'react-ga'

function App() {
  const trackingId = 'G-YMTQHQB60B'
  ReactGA.initialize(trackingId)
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div className="App">
      <CaloriesForm />
      <Divider variant="middle" />
      <NutrientForm />
    </div>
  )
}

export default App
