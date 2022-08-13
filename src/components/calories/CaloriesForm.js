import React from 'react'

import InputField from '../InputField'
import SelectField from '../SelectField'
import { DRE_OBJECT } from './caloriesForm.consts'
import { calcRER, createActivityLevelSelectField } from './caloriesForm.helpers'

import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const CaloriesForm = ({ getLowerUpperBound }) => {
  const activityLevelOptions = createActivityLevelSelectField(DRE_OBJECT)

  const onSubmitForm = ({ weight, DREFactor }) => {
    const rer = calcRER(weight)

    const lowerBound = Math.round(DRE_OBJECT[DREFactor].lowerBound * rer)
    const upperBound = Math.round(DRE_OBJECT[DREFactor].upperBound * rer)

    getLowerUpperBound({
      lowerBound: lowerBound,
      upperBound: upperBound,
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div>
      <h1>Cat's calorie calculator</h1>
      <h2>貓咪每日所需攝取熱量計算機</h2>
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
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
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
    </div>
  )
}

export default CaloriesForm
