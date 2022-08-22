import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const CalciumToPhosphorusRatioResult = ({ calciumRatio }) => (
  <div>
    <Stack sx={{ width: '100%' }} spacing={1} my={2}>
      <Alert severity="info">
        Calcium To Phosphorus Ratio (鈣磷比) {calciumRatio.toFixed(2)}:1
      </Alert>
    </Stack>
  </div>
)

export default CalciumToPhosphorusRatioResult
