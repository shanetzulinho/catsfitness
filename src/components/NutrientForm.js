import React, { useState } from 'react'

import InputField from '../components/InputField'
import {
  calcMetabolizableEnergy,
  calcDryMatterBasis,
  calcCalciumToPhosphorusRatio,
} from '../components/nutrientForm.helpers'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const NutrientForm = () => {
  const [inputs, setInputs] = useState({
    totalCalories: 0,
    protein: 0,
    fat: 0,
    moisture: 0,
    fiber: 0,
    ash: 0,
    calcium: 0,
    phosphorus: 0,
  })
  const [metabolizableEngergyTable, setMetabolizableEngergyTable] = useState('')
  const [dryMatterBasisTable, setDryMatterBasisTable] = useState('')
  const [calciumToPhosphorusRatioTable, setCalciumToPhosphorusRatioTable] = useState('')

  const { totalCalories, protein, fat, moisture, fiber, ash, calcium, phosphorus } =
    inputs

  const handleFormInputs = (event) => {
    const { value, name } = event.target
    setInputs({ ...inputs, [name]: value })
  }

  const onSubmitForm = () => {
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
          label="Total calories(總體熱量) Kcal"
          type="Number"
          name="totalCalories"
          value={totalCalories}
          onChange={handleFormInputs}
        />
        <InputField
          label="Protein(蛋白質)%"
          type="Number"
          name="protein"
          value={protein}
          onChange={handleFormInputs}
        />
        <InputField
          label="Fat(脂肪)%"
          type="Number"
          name="fat"
          value={fat}
          onChange={handleFormInputs}
        />
        <InputField
          label="Moisture(水份)%"
          type="Number"
          name="moisture"
          value={moisture}
          onChange={handleFormInputs}
        />
        <InputField
          label="Fiber(纖維)%"
          type="Number"
          name="fiber"
          value={fiber}
          onChange={handleFormInputs}
        />
        <InputField
          label="Ash(灰份)%"
          type="Number"
          name="ash"
          value={ash}
          onChange={handleFormInputs}
        />
        <InputField
          label="Calcium(鈣)%"
          type="Number"
          name="calcium"
          value={calcium}
          onChange={handleFormInputs}
        />
        <InputField
          label="Phosphorus(磷)%"
          type="Number"
          name="phosphorus"
          value={phosphorus}
          onChange={handleFormInputs}
        />
        <Button label="Submit" name="submit" onClick={onSubmitForm}>
          Submit
        </Button>
      </FormControl>
      <Stack sx={{ width: '100%' }} spacing={2}>
        {metabolizableEngergyTable}
        {dryMatterBasisTable}
        {calciumToPhosphorusRatioTable}
      </Stack>
    </Box>
  )
}

export default NutrientForm
