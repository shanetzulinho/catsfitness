import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ label, type, name, value, onChange }) => {
    return (
        <TextField
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            variant="filled"
        />
    );
};

export default InputField;