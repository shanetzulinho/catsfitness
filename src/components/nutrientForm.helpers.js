import MetabolizableEnergyTable from '../components/MetabolizableEnergyTable'
import DryMatterBasisTable from '../components/DryMatterBasisTable'

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

  return (
    <MetabolizableEnergyTable
      proteinProportion={calcProportion(proteinKcal, totalKcal)}
      fatProportion={calcProportion(fatKcal, totalKcal)}
      carbsProportion={calcProportion(carbsKcal, totalKcal)}
    />
  )
}

export const calcDryMatterBasis = (protein, fat, moisture, fiber, ash, totalCalories) => {
  let carbs = calcCarbs(protein, fat, moisture, fiber, ash)

  // check if carb is negative
  if (carbs < 0) {
    const carbKcal = totalCalories - protein * 3.5 - fat * 8.5
    carbs = carbKcal / 3.5
  }

  const dryMatter = 100 - moisture

  return (
    <DryMatterBasisTable
      proteinProportion={calcProportion(protein, dryMatter)}
      fatProportion={calcProportion(fat, dryMatter)}
      carbsProportion={calcProportion(carbs, dryMatter)}
    />
  )
}

export const calcCalciumToPhosphorusRatio = (calcium, phosphorus) => {
  const caToPhoRatio = calcium / phosphorus
  return <div>Calcium To Phosphorus Ratio (鈣磷比) {caToPhoRatio.toFixed(2)}:1</div>
}
