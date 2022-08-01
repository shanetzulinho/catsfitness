import React, { useState } from 'react'

import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import { DRE_OBJECT } from '../components/caloriesForm.consts'
import {
  calcRER,
  showMessage,
  createActivityLevelSelectField,
} from '../components/caloriesForm.helpers'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const CaloriesForm = () => {
  const [inputs, setInputs] = useState({ weight: 0, DREFactor: 'default' })
  const [dailyCaloriesMessage, setDailyCaloriesMessage] = useState('')

  const { weight, DREFactor } = inputs
  const activityLevelOptions = createActivityLevelSelectField(DRE_OBJECT)

  const onSubmitForm = () => {
    const rer = calcRER(weight)

    const lowerBound = Math.round(DRE_OBJECT[DREFactor].lowerBound * rer)
    const upperBound = Math.round(DRE_OBJECT[DREFactor].upperBound * rer)

    const caloriesMessage = showMessage(lowerBound, upperBound)
    setDailyCaloriesMessage(caloriesMessage)
  }

  const handleFormInputs = (event) => {
    const { value, name } = event.target
    setInputs({ ...inputs, [name]: value })
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
          onChange={handleFormInputs}
        />
        <SelectField
          label="Activity Level"
          name="DREFactor"
          defaultValue={DREFactor}
          items={activityLevelOptions}
          onChange={handleFormInputs}
        />
        <Button label="Submit" name="submit" onClick={onSubmitForm}>
          Submit
        </Button>
      </FormControl>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">Estimated daily calories: {dailyCaloriesMessage}</Alert>
      </Stack>
    </Box>
  )
}

export default CaloriesForm
