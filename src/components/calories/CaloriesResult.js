import React from 'react'
import { showMessage } from './caloriesForm.helpers'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const CaloriesResult = ({ lowerUpperBound }) => {
  const { lowerBound, upperBound } = lowerUpperBound
  const caloriesMessage = showMessage(lowerBound, upperBound)

  return (
    <div>
      <Stack sx={{ width: '100%' }} spacing={1} my={2}>
        <Alert severity="info">
          Estimated daily calories (估計每日攝取卡路里): {caloriesMessage}
        </Alert>
      </Stack>
    </div>
  )
}

export default CaloriesResult
