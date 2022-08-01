export const createActivityLevelSelectField = (DREFactor) => {
  let options = []
  for (const [key, value] of Object.entries(DREFactor)) {
    options.push({ value: key, label: value.label })
  }
  return options
}

export const calcRER = (weight) => 70 * Math.pow(weight, 0.75)

export const showMessage = (lowerBound, upperBound) => {
  return lowerBound === upperBound
    ? `${lowerBound} ~ more`
    : `${lowerBound} ~ ${upperBound}`
}
