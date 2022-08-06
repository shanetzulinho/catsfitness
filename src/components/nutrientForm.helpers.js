export const calcCarb = (protein, fat, moisture, fiber, ash) =>
  100 - protein - fat - moisture - fiber - ash

export const calcProportion = (numerator, denominator) =>
  Math.round((numerator / denominator) * 100)
