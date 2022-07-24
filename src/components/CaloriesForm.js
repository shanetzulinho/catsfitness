import React, { useState } from 'react';

import InputField from '../components/InputField';
import SelectField from '../components/SelectField';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const DREFactors = [
    {
      value: 'kitten-intact',
      label: '幼貓(未滿10歲)-未結紮',
    },
    {
      value: 'intact',
      label: '成貓-未結紮',
    },
    {
      value: 'spayed/Neutered',
      label: '成貓-已結紮',
    },
    {
      value: 'overweight',
      label: '成貓-肥胖或不愛動',
    },
    {
        value: 'underweight',
        label: '成貓-過瘦',
    },
    {
      value: '7-11yrs',
      label: '中年成貓',
    },
    {
      value: 'over11yrs',
      label: '老貓',
    },
    {
      value: 'pregnant',
      label: '母貓-懷孕中',
    },
    {
      value: 'nursing',
      label: '母貓-哺乳中',
    }
];

const CaloriesForm = () => {
  const [Weight, setWeight] = useState(0);
  const [DREFactor, setDREFactor] = useState('');
  const [CalLower, setCalLower] = useState(0);
  const [CalUpper, setCalUpper] = useState(0);

  const handleInputChange = (event) => {
    setWeight(event.target.value);
  }

  const handleSelectChange = (event) => {
    setDREFactor(event.target.value);
    CalculateCalories(event.target.value);
  }

  const CalculateRER = () => {
    let rer = 70 * (Weight)^0.75;
    return rer;
  }

  const CalculateCalories = (factors) => {
    const rer = CalculateRER();

    let lower_bound = 0;
    let upper_bound = 0;
    switch (factors) {
      case 'kitten-intact':
        lower_bound = rer * 2.5;
        upper_bound = rer * 2.5;
        break;
      case 'intact':
        lower_bound = rer * 1.2;
        upper_bound = rer * 1.4;
        break;
      case 'spayed/Neutered':
        lower_bound = rer * 1.4;
        upper_bound = rer * 1.6;
        break;
      case 'overweight':
        lower_bound = rer * 0.8;
        upper_bound = rer * 1.0;
        break;
      case 'underweight':
        lower_bound = rer * 1.2;
        upper_bound = rer * 1.8;
        break;
      case '7-11yrs':
        lower_bound = rer * 1.1;
        upper_bound = rer * 1.4;
        break;
      case 'over11yrs':
        lower_bound = rer * 1.1;
        upper_bound = rer * 1.6;
        break;
      case 'pregnant':
        lower_bound = rer * 1.6;
        upper_bound = rer * 2.0;
        break;
      case 'nursing':
        lower_bound = rer * 2.0;
        upper_bound = rer * 2.0;
        break;
      default:
        alert(`Your selected: ${DREFactor}`);
    }
    setCalLower(Math.round(lower_bound));
    setCalUpper(Math.round(upper_bound));
  }

  const lower = CalLower;
  const upper = CalUpper;

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
          label="Weight (kg)"
          type="Number"
          name="weight"
          value={Weight}
          onChange={handleInputChange}
        />
        <SelectField
          label="Activity Level"
          name="activity_level"
          defaultValue="kitten-intact"
          items={DREFactors}
          onChange={handleSelectChange}
        />  
      </FormControl>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">Estimated daily calories<br />
        {
          lower === upper
          ? `${lower} ~ more`
          : `${lower} ~ ${upper}`
            
        }
        </Alert>
      </Stack>
    </Box>
  );
}

export default CaloriesForm;