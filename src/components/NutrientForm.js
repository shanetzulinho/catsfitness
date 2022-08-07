import React, { useState } from 'react'

import InputField from '../components/InputField'
import {
  calcMetabolizableEnergy,
  calcDryMatterBasis,
  calcCalciumToPhosphorusRatio,
} from '../components/nutrientForm.helpers'

import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const NutrientForm = () => {
  const [metabolizableEngergyTable, setMetabolizableEngergyTable] = useState('')
  const [dryMatterBasisTable, setDryMatterBasisTable] = useState('')
  const [calciumToPhosphorusRatioTable, setCalciumToPhosphorusRatioTable] = useState('')

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
    const getMetabolizableEnergyTable = calcMetabolizableEnergy(
      protein,
      fat,
      moisture,
      fiber,
      ash
    )
    setMetabolizableEngergyTable(getMetabolizableEnergyTable)

    const getDryMatterBasisTable = calcDryMatterBasis(
      protein,
      fat,
      moisture,
      fiber,
      ash,
      totalCalories
    )
    setDryMatterBasisTable(getDryMatterBasisTable)

    const getCalciumToPhosphorusRatioTable = calcCalciumToPhosphorusRatio(
      calcium,
      phosphorus
    )
    setCalciumToPhosphorusRatioTable(getCalciumToPhosphorusRatioTable)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Container maxWidth="sm">
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
      <Stack sx={{ width: '100%' }} spacing={1} my={2}>
        {metabolizableEngergyTable}
        {dryMatterBasisTable}
        {calciumToPhosphorusRatioTable}
      </Stack>
    </Container>
  )
}

export default NutrientForm
