import React, { useState } from 'react'

import InputField from '../components/InputField'
// import SelectField from '../components/SelectField'
import {
  calculateProteinRate,
  calculateFatRate,
  calculateCarbRate,
} from '../components/nutrientForm.helpers'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const NutrientForm = () => {
  const [inputs, setInputs] = useState({})
  const [proteinRate, setProteinRate] = useState(0)
  const [fatRate, setFatRate] = useState(0)
  const [carbRate, setCarbRate] = useState(0)

  const handleInputChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const calculateNutrient = (inputs) => {
    const { protein, fat, moisture, fiber, ash } = inputs
    // calculate carbs
    const carb = 100 - protein - fat - moisture - fiber - ash

    // calculate calories of protein, fat, and carb
    const proteinKcal = protein * 3.5
    const fatKcal = fat * 8.5
    const carbKcal = carb * 3.5
    const totalKcal = proteinKcal + fatKcal + carbKcal

    setProteinRate(calculateProteinRate(proteinKcal, totalKcal))
    setFatRate(calculateFatRate(fatKcal, totalKcal))
    setCarbRate(calculateCarbRate(carbKcal, totalKcal))
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: 200 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl fullWidth>
        <InputField
          label="Protein(蛋白質)%"
          type="Number"
          name="protein"
          value={inputs.protein || 0}
          onChange={handleInputChange}
        />
        <InputField
          label="Fat(脂肪)%"
          type="Number"
          name="fat"
          value={inputs.fat || 0}
          onChange={handleInputChange}
        />
        <InputField
          label="Moisture(水份)%"
          type="Number"
          name="moisture"
          value={inputs.moisture || 0}
          onChange={handleInputChange}
        />
        <InputField
          label="Fiber(纖維)%"
          type="Number"
          name="fiber"
          value={inputs.fiber || 0}
          onChange={handleInputChange}
        />
        <InputField
          label="Ash(灰份)%"
          type="Number"
          name="ash"
          value={inputs.ash || 0}
          onChange={handleInputChange}
        />
        <InputField
          label="Calcium(鈣)%"
          type="Number"
          name="calcium"
          value={inputs.calcium || 0}
          onChange={handleInputChange}
        />
        <InputField
          label="Phosphorus(磷)%"
          type="Number"
          name="phosphorus"
          value={inputs.phosphorus || 0}
          onChange={handleInputChange}
        />
        <Button
          variant="outlined"
          onClick={() => {
            calculateNutrient(inputs)
          }}
        >
          Calculate
        </Button>
      </FormControl>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">
          Protein: {proteinRate}% Fat: {fatRate}% Carbs: {carbRate}
        </Alert>
      </Stack>
    </Box>
  )
}

export default NutrientForm
