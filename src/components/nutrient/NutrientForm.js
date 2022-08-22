import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import InputField from '../InputField'
import {
  calcMetabolizableEnergy,
  calcDryMatterBasis,
  calcCalciumToPhosphorusRatio,
} from './nutrientForm.helpers'
import { INPUTS, INPUTS_ATTRIBUTES } from './nutrientForm.consts'
import { validationNumberRegisterOptions } from '../validationRules'
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
    control,
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
          {Object.values(INPUTS).map((key) => {
            return (
              <Controller
                key={key}
                name={INPUTS_ATTRIBUTES[key].name}
                control={control}
                rules={validationNumberRegisterOptions}
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    {...field}
                    label={INPUTS_ATTRIBUTES[key].label}
                    type="number"
                    error={Boolean(errors[key])}
                    helperText={errors[key]?.message}
                  />
                )}
              />
            )
          })}
          <Button variant="contained" name="submit" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default NutrientForm
