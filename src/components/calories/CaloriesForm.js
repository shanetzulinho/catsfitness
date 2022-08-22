import React from 'react'

import InputField from '../InputField'
import SelectField from '../SelectField'
import { DRE_OBJECT } from './caloriesForm.consts'
import { calcRER, createActivityLevelSelectField } from './caloriesForm.helpers'
import { validationRequired, validationNumberRegisterOptions } from '../validationRules'

import { useForm, Controller } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const CaloriesForm = ({ getLowerUpperBound }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

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
          <Controller
            name="weight"
            control={control}
            rules={validationNumberRegisterOptions}
            defaultValue=""
            render={({ field }) => (
              <InputField
                {...field}
                label="Weight (體重) kg"
                type="number"
                error={Boolean(errors.weight)}
                helperText={errors.weight?.message}
              />
            )}
          />
          <Controller
            name="DREFactor"
            control={control}
            defaultValue=""
            rules={validationRequired}
            render={({ field }) => (
              <SelectField
                {...field}
                label="Activity Level (活動量)"
                name="DREFactor"
                items={activityLevelOptions}
                error={Boolean(errors.DREFactor)}
                helperText={errors.DREFactor?.message}
              />
            )}
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
