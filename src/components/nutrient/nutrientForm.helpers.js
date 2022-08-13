export const calcCarbs = (protein, fat, moisture, fiber, ash) =>
  100 - protein - fat - moisture - fiber - ash

export const calcProportion = (numerator, denominator) =>
  Math.round((numerator / denominator) * 100)

export const calcMetabolizableEnergy = (protein, fat, moisture, fiber, ash) => {
  const carbs = calcCarbs(protein, fat, moisture, fiber, ash)

  // calculate calories proportion of protein, fat, and carb
  const proteinKcal = protein * 3.5
  const fatKcal = fat * 8.5
  const carbsKcal = carbs * 3.5
  const totalKcal = proteinKcal + fatKcal + carbsKcal

  const proteinProportion = calcProportion(proteinKcal, totalKcal)
  const fatProportion = calcProportion(fatKcal, totalKcal)
  const carbsProportion = calcProportion(carbsKcal, totalKcal)

  return {
    proteinProportion: proteinProportion,
    fatProportion: fatProportion,
    carbsProportion: carbsProportion,
  }
}

export const calcDryMatterBasis = (protein, fat, moisture, fiber, ash, totalCalories) => {
  let carbs = calcCarbs(protein, fat, moisture, fiber, ash)

  // check if carb is negative
  if (carbs < 0) {
    const carbKcal = totalCalories - protein * 3.5 - fat * 8.5
    carbs = carbKcal / 3.5
  }

  const dryMatter = 100 - moisture

  const proteinProportion = calcProportion(protein, dryMatter)
  const fatProportion = calcProportion(fat, dryMatter)
  const carbsProportion = calcProportion(carbs, dryMatter)

  return {
    dryProteinProportion: proteinProportion,
    dryFatProportion: fatProportion,
    dryCarbsProportion: carbsProportion,
  }
}

export const calcCalciumToPhosphorusRatio = (calcium, phosphorus) => calcium / phosphorus
