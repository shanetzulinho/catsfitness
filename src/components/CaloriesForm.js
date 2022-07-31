import React, { useState, useEffect } from 'react'

import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import { DRE_OBJECT, DRE_FACTORS_OPTIONS } from '../components/caloriesForm.consts'
import { calcRER, showMessage } from '../components/caloriesForm.helpers'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const CaloriesForm = () => {
  const [weight, setWeight] = useState(0)
  const [DREFactor, setDREFactor] = useState('default')
  const [calcLower, setCalcLower] = useState(0)
  const [calcUpper, setCalcUpper] = useState(0)

  const calcLowerBound = (factors, rer) => {
    const lowerBound = Math.round(DRE_OBJECT[factors].lowerBound * rer)
    setCalcLower(lowerBound)
  }

  const calcUpperBound = (factors, rer) => {
    const upperBound = Math.round(DRE_OBJECT[factors].upperBound * rer)
    setCalcUpper(upperBound)
  }

  useEffect(() => {
    const calcCalories = (weight, factors) => {
      const rer = calcRER(weight)

      calcLowerBound(factors, rer)
      calcUpperBound(factors, rer)
    }

    calcCalories(weight, DREFactor)
  }, [weight, DREFactor])

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
          onChange={(e) => setWeight(e.target.value)}
        />
        <SelectField
          label="Activity Level"
          name="activity_level"
          defaultValue={DREFactor}
          items={DRE_FACTORS_OPTIONS}
          onChange={(e) => setDREFactor(e.target.value)}
        />
      </FormControl>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">
          Estimated daily calories: {showMessage(calcLower, calcUpper)}
        </Alert>
      </Stack>
    </Box>
  )
}

export default CaloriesForm
