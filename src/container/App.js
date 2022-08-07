import './App.css'
import CaloriesForm from '../components/CaloriesForm'
import NutrientForm from '../components/NutrientForm'
import Divider from '@mui/material/Divider'

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
