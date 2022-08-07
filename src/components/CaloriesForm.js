import React, { useState } from 'react'

import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import { DRE_OBJECT } from '../components/caloriesForm.consts'
import {
  calcRER,
  showMessage,
  createActivityLevelSelectField,
} from '../components/caloriesForm.helpers'

import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const CaloriesForm = () => {
  const [dailyCaloriesMessage, setDailyCaloriesMessage] = useState('')
  const activityLevelOptions = createActivityLevelSelectField(DRE_OBJECT)

  const onSubmitForm = ({ weight, DREFactor }) => {
    const rer = calcRER(weight)

    const lowerBound = Math.round(DRE_OBJECT[DREFactor].lowerBound * rer)
    const upperBound = Math.round(DRE_OBJECT[DREFactor].upperBound * rer)

    const caloriesMessage = showMessage(lowerBound, upperBound)
    setDailyCaloriesMessage(caloriesMessage)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Container maxWidth="sm">
      <h1>Cat's calorie calculator</h1>
      <h2>貓咪每日所需攝取熱量計算</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          autoComplete="off"
        >
          <InputField
            label="Weight (體重) kg"
            name="weight"
            {...register('weight', {
              required: 'Weight (體重) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.weight)}
            helperText={errors.weight?.message}
          />
          <SelectField
            label="Activity Level (活動量)"
            name="DREFactor"
            items={activityLevelOptions}
            {...register('DREFactor', {
              required: 'Activity Level (活動量) is required.',
            })}
            error={Boolean(errors.DREFactor)}
            helperText={errors.DREFactor?.message}
          />
          <Button variant="contained" name="submit" type="submit">
            Submit
          </Button>
        </Box>
      </form>
      <Stack sx={{ width: '100%' }} spacing={1} my={2}>
        <Alert severity="info">
          Estimated daily calories (估計每日攝取卡路里): {dailyCaloriesMessage}
        </Alert>
      </Stack>
    </Container>
  )
}

export default CaloriesForm
