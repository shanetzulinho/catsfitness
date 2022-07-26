export const FACTORS = {
  KITTEN_INTACT: 'kitten_intact',
  INTACT: 'intact',
  SPAYED_NEUTERED: 'spayed/neutered',
  OVERWEIGHT: 'overweight',
  UNDERWEIGHT: 'underweight',
  MIDDLE_AGE: 'middle_age',
  ELDERLY_AGE: 'elderly_age',
  PREGNANT: 'pregnant',
  NURSING: 'nursing',
}

export const DRE_OBJECT = {
  [FACTORS.KITTEN_INTACT]: {
    label: 'Kitten less than 10 months - Intact (幼貓[未滿10個月]-未結紮)',
    lowerBound: 2.5,
    upperBound: 2.5,
  },
  [FACTORS.INTACT]: {
    label: 'Intact (成貓-未結紮)',
    lowerBound: 1.4,
    upperBound: 1.6,
  },
  [FACTORS.SPAYED_NEUTERED]: {
    label: 'Spayed/Neutered (成貓-已結紮)',
    lowerBound: 1.2,
    upperBound: 1.4,
  },
  [FACTORS.OVERWEIGHT]: {
    label: 'Overweight/Sedentary (成貓-肥胖或不愛動)',
    lowerBound: 0.8,
    upperBound: 1.0,
  },
  [FACTORS.UNDERWEIGHT]: {
    label: 'Underweight (成貓-過瘦)',
    lowerBound: 1.2,
    upperBound: 1.8,
  },
  [FACTORS.MIDDLE_AGE]: {
    label: '7 to 11 years old (中年成貓)',
    lowerBound: 1.1,
    upperBound: 1.4,
  },
  [FACTORS.ELDERLY_AGE]: {
    label: 'Over 11 years old (老貓)',
    lowerBound: 1.1,
    upperBound: 1.6,
  },
  [FACTORS.PREGNANT]: {
    label: 'Pregnant (母貓-懷孕中)',
    lowerBound: 1.6,
    upperBound: 2.0,
  },
  [FACTORS.NURSING]: {
    label: 'Nursing (母貓-哺乳中)',
    lowerBound: 2.0,
    upperBound: 2.0,
  },
}
