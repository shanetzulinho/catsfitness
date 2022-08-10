import './App.css'
import CaloriesForm from '../components/CaloriesForm'
import NutrientForm from '../components/NutrientForm'
import Divider from '@mui/material/Divider'

import ReactGA from 'react-ga'

const trackingId = 'G-YMTQHQB60B'
const appURL = 'https://mycatsfitness.netlify.app/'
ReactGA.initialize(trackingId)
ReactGA.send(window.location.pathname + window.location.search)
ReactGA.send(appURL)

function App() {
  return (
    <div className="App">
      <CaloriesForm />
      <Divider variant="middle" />
      <NutrientForm />
    </div>
  )
}

export default App
