import React, { useState } from 'react'

import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import { FACTORS, DRE_OBJECT } from '../components/caloriesForm.consts'
import { calculateRER, showMessage } from '../components/caloriesForm.helpers'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

// options for activity_level SelectField
const DRE_FACTORS_OPTIONS = [
  {
    value: FACTORS.KITTEN_INTACT,
    label: DRE_OBJECT[FACTORS.KITTEN_INTACT].label,
  },
  {
    value: FACTORS.INTACT,
    label: DRE_OBJECT[FACTORS.INTACT].label,
  },
  {
    value: FACTORS.SPAYED_NEUTERED,
    label: DRE_OBJECT[FACTORS.SPAYED_NEUTERED].label,
  },
  {
    value: FACTORS.OVERWEIGHT,
    label: DRE_OBJECT[FACTORS.OVERWEIGHT].label,
  },
  {
    value: FACTORS.UNDERWEIGHT,
    label: DRE_OBJECT[FACTORS.UNDERWEIGHT].label,
  },
  {
    value: FACTORS.MIDDLE_AGE,
    label: DRE_OBJECT[FACTORS.MIDDLE_AGE].label,
  },
  {
    value: FACTORS.ELDERLY_AGE,
    label: DRE_OBJECT[FACTORS.ELDERLY_AGE].label,
  },
  {
    value: FACTORS.PREGNANT,
    label: DRE_OBJECT[FACTORS.PREGNANT].label,
  },
  {
    value: FACTORS.NURSING,
    label: DRE_OBJECT[FACTORS.NURSING].label,
  },
]

const CaloriesForm = () => {
  const [weight, setWeight] = useState(0)
  const [DREFactor, setDREFactor] = useState('')
  const [calLower, setCalLower] = useState(0)
  const [calUpper, setCalUpper] = useState(0)

  const handleInputChange = (event) => {
    setWeight(event.target.value)
  }

  const handleSelectChange = (event, weight) => {
    const value = event.target.value
    setDREFactor(value)
    calculateCalories(value, weight)
  }

  const calculateCalories = (factors, weight) => {
    const rer = calculateRER(weight)

    const lowerBound = DRE_OBJECT[factors].lowerBound * rer
    const upperBound = DRE_OBJECT[factors].upperBound * rer

    setCalLower(Math.round(lowerBound))
    setCalUpper(Math.round(upperBound))
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
          label="Weight (kg)"
          type="Number"
          name="weight"
          value={weight}
          onChange={handleInputChange}
        />
        <SelectField
          label="Activity Level"
          name="activity_level"
          defaultValue={DREFactor}
          items={DRE_FACTORS_OPTIONS}
          onChange={(e) => handleSelectChange(e, weight)}
        />
      </FormControl>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">
          Estimated daily calories: {showMessage(calLower, calUpper)}
        </Alert>
      </Stack>
    </Box>
  )
}

export default CaloriesForm
