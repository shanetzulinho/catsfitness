export const calculateProteinRate = (proteinKcal, totalKcal) => {
  const proteinRate = Math.round((proteinKcal / totalKcal) * 100)
  return proteinRate
}

export const calculateFatRate = (fatKcal, totalKcal) => {
  const fatRate = Math.round((fatKcal / totalKcal) * 100)
  return fatRate
}

export const calculateCarbRate = (carbKcal, totalKcal) => {
  const carbRate = Math.round((carbKcal / totalKcal) * 100)
  return carbRate
}
