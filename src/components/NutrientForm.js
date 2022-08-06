import React, { useEffect, useState } from 'react'

import InputField from '../components/InputField'
import { calcCarb, calcProportion } from '../components/nutrientForm.helpers'
import { INPUTS_INFO } from '../components/nutrientForm.consts'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

const NutrientForm = () => {
  const [inputs, setInputs] = useState({})
  const [proteinProportion, setProteinProportion] = useState(0)
  const [fatProportion, setFatProportion] = useState(0)
  const [carbProportion, setCarbProportion] = useState(0)
  const [dryProtein, setDryProtein] = useState(0)
  const [dryFat, setDryFat] = useState(0)
  const [dryCarb, setDryCarb] = useState(0)
  const [calciumToPhosphorusRatio, setCalciumToPhosphorusRatio] = useState(0)

  const handleInputsChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const calcMetabolizableEnergy = ({ protein, fat, moisture, fiber, ash }) => {
    const carb = calcCarb(protein, fat, moisture, fiber, ash)

    // calculate calories proportion of protein, fat, and carb
    const proteinKcal = protein * 3.5
    const fatKcal = fat * 8.5
    const carbKcal = carb * 3.5
    const totalKcal = proteinKcal + fatKcal + carbKcal

    setProteinProportion(calcProportion(proteinKcal, totalKcal))
    setFatProportion(calcProportion(fatKcal, totalKcal))
    setCarbProportion(calcProportion(carbKcal, totalKcal))
  }

  const calcDryMatterBasis = ({ protein, fat, moisture, fiber, ash, totalCalories }) => {
    let carb = calcCarb(protein, fat, moisture, fiber, ash)
    // check if carb is negative
    if (carb < 0) {
      const carbKcal = totalCalories - protein * 3.5 - fat * 8.5
      carb = carbKcal / 3.5
    }

    const dryMatter = 100 - moisture
    setDryProtein(calcProportion(protein, dryMatter))
    setDryFat(calcProportion(fat, dryMatter))
    setDryCarb(calcProportion(carb, dryMatter))
  }

  const calcCalciumToPhosphorusRatio = ({ calcium, phosphorus }) => {
    setCalciumToPhosphorusRatio(calcium / phosphorus)
  }

  useEffect(() => {
    calcMetabolizableEnergy(inputs)
    calcDryMatterBasis(inputs)
    calcCalciumToPhosphorusRatio(inputs)
  }, [inputs])

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
          label={INPUTS_INFO.TOTAL_CALORIES.label}
          type="Number"
          name={INPUTS_INFO.TOTAL_CALORIES.name}
          value={inputs[INPUTS_INFO.TOTAL_CALORIES]}
          onChange={handleInputsChange}
        />
        <InputField
          label={INPUTS_INFO.PROTEIN.label}
          type="Number"
          name={INPUTS_INFO.PROTEIN.name}
          value={inputs[INPUTS_INFO.PROTEIN]}
          onChange={handleInputsChange}
        />
        <InputField
          label={INPUTS_INFO.FAT.label}
          type="Number"
          name={INPUTS_INFO.FAT.name}
          value={inputs[INPUTS_INFO.FAT]}
          onChange={handleInputsChange}
        />
        <InputField
          label={INPUTS_INFO.MOISTURE.label}
          type="Number"
          name={INPUTS_INFO.MOISTURE.name}
          value={inputs[INPUTS_INFO.MOISTURE]}
          onChange={handleInputsChange}
        />
        <InputField
          label={INPUTS_INFO.FIBER.label}
          type="Number"
          name={INPUTS_INFO.FIBER.name}
          value={inputs[INPUTS_INFO.FIBER]}
          onChange={handleInputsChange}
        />
        <InputField
          label={INPUTS_INFO.ASH.label}
          type="Number"
          name={INPUTS_INFO.ASH.name}
          value={inputs[INPUTS_INFO.ASH]}
          onChange={handleInputsChange}
        />
        <InputField
          label={INPUTS_INFO.CALCIUM.label}
          type="Number"
          name={INPUTS_INFO.CALCIUM.name}
          value={inputs[INPUTS_INFO.CALCIUM]}
          onChange={handleInputsChange}
        />
        <InputField
          label={INPUTS_INFO.PHOSPHORUS.label}
          type="Number"
          name={INPUTS_INFO.PHOSPHORUS.name}
          value={inputs[INPUTS_INFO.PHOSPHORUS]}
          onChange={handleInputsChange}
        />
      </FormControl>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">
          <AlertTitle>ME% (Metabolizable Energy, 代謝能熱量比)</AlertTitle>
          Protein: {proteinProportion ? proteinProportion : 0}% Fat:{' '}
          {fatProportion ? fatProportion : 0}% Carbs:{' '}
          {carbProportion ? carbProportion : 0}%
        </Alert>
        <Alert severity="info">
          <AlertTitle>Dry Matter Basis (乾物比)</AlertTitle>
          Protein: {dryProtein ? dryProtein : 0}% Fat: {dryFat ? dryFat : 0}% Carbs:
          {dryCarb ? dryCarb : 0}%
        </Alert>
        <Alert severity="info">
          <AlertTitle>Calcium To Phosphorus Ratio (鈣磷比)</AlertTitle>
          {calciumToPhosphorusRatio ? calciumToPhosphorusRatio.toFixed(2) : 0} : 1
        </Alert>
      </Stack>
    </Box>
  )
}

export default NutrientForm
