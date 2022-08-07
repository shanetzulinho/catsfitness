import React from 'react'
import TextField from '@mui/material/TextField'

const InputField = React.forwardRef(
  ({ label, type, name, value, onChange, helperText, error }, ref) => {
    return (
      <TextField
        variant="outlined"
        fullWidth
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
  }
)

export default InputField
