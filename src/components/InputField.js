import React from 'react'
import TextField from '@mui/material/TextField'

const InputField = React.forwardRef(
  ({ label, type, name, value, onChange, error, helperText }, ref) => (
    <TextField
      variant="outlined"
      fullWidth
      InputProps={{ inputProps: { min: 0.1, step: 0.1 } }}
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      ref={ref}
    />
  )
)

export default InputField
