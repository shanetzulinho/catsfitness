import React from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

const SelectField = React.forwardRef(
  ({ label, name, items, onChange, helperText, error }, ref) => (
    <TextField
      select
      fullWidth
      label={label}
      name={name}
      defaultValue=""
      onChange={onChange}
      variant="outlined"
      error={error}
      helperText={helperText}
      ref={ref}
    >
      {items.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
)

export default SelectField
