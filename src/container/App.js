import './App.css'
import CaloriesForm from '../components/CaloriesForm'
import NutrientForm from '../components/NutrientForm'
import Divider from '@mui/material/Divider'

import ReactGA from 'react-ga'

ReactGA.initialize('G-YMTQHQB60B')
ReactGA.pageview('/')

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
