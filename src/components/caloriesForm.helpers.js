export const calculateRER = (weight) => {
  return 70 * Math.pow(weight, 0.75)
}

export const showMessage = (lowerBound, upperBound) => {
  return lowerBound === upperBound
    ? `${lowerBound} ~ more`
    : `${lowerBound} ~ ${upperBound}`
}
