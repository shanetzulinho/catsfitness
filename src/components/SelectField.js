import React from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

const SelectField = ({ label, name, items, onChange }) => {
  return (
    <TextField
      select
      label={label}
      name={name}
      defaultValue=""
      onChange={onChange}
      variant="filled"
    >
      {items.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectField
