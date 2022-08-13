import React from 'react'

import InputField from '../components/InputField'
import {
  calcMetabolizableEnergy,
  calcDryMatterBasis,
  calcCalciumToPhosphorusRatio,
} from '../components/nutrientForm.helpers'

import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const NutrientForm = ({ getMetabolizableEnergy, getDryMatterBasis, getCalciumRatio }) => {
  const onSubmitForm = ({
    totalCalories,
    protein,
    fat,
    moisture,
    fiber,
    ash,
    calcium,
    phosphorus,
  }) => {
    const calcMetabolizableEnergyResult = calcMetabolizableEnergy(
      protein,
      fat,
      moisture,
      fiber,
      ash
    )
    getMetabolizableEnergy(calcMetabolizableEnergyResult)

    const calcDryMatterBasisResult = calcDryMatterBasis(
      protein,
      fat,
      moisture,
      fiber,
      ash,
      totalCalories
    )
    getDryMatterBasis(calcDryMatterBasisResult)

    const calcCalciumToPhosphorusRatioResult = calcCalciumToPhosphorusRatio(
      calcium,
      phosphorus
    )
    getCalciumRatio(calcCalciumToPhosphorusRatioResult)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div>
      <h1>Cat food nutrient calculator</h1>
      <h2>貓食營養素計算機</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          autoComplete="off"
        >
          <InputField
            label="Total calories (總體熱量) Kcal"
            name="totalCalories"
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            {...register('totalCalories', {
              required: 'Total calories (總體熱量) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.totalCalories)}
            helperText={errors.totalCalories?.message}
          />
          <InputField
            label="Protein (蛋白質)%"
            name="protein"
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            {...register('protein', {
              required: 'Protein (蛋白質) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.protein)}
            helperText={errors.protein?.message}
          />
          <InputField
            label="Fat (脂肪)%"
            name="fat"
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            {...register('fat', {
              required: 'Fat (脂肪) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.fat)}
            helperText={errors.fat?.message}
          />
          <InputField
            label="Moisture (水份)%"
            name="moisture"
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            {...register('moisture', {
              required: 'Moisture (水份) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.moisture)}
            helperText={errors.moisture?.message}
          />
          <InputField
            label="Fiber (纖維)%"
            name="fiber"
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            {...register('fiber', {
              required: 'Fiber (纖維) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.fiber)}
            helperText={errors.fiber?.message}
          />
          <InputField
            label="Ash (灰份)%"
            name="ash"
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            {...register('ash', {
              required: 'Ash (灰份) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.ash)}
            helperText={errors.ash?.message}
          />
          <InputField
            label="Calcium (鈣)%"
            name="calcium"
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            {...register('calcium', {
              required: 'Calcium (鈣) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.calcium)}
            helperText={errors.calcium?.message}
          />
          <InputField
            label="Phosphorus (磷)%"
            name="phosphorus"
            type="number"
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
            {...register('phosphorus', {
              required: 'Phosphorus (磷) is required.',
              valueAsNumber: true,
            })}
            error={Boolean(errors.phosphorus)}
            helperText={errors.phosphorus?.message}
          />
          <Button variant="contained" name="submit" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default NutrientForm
