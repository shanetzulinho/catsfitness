import { calculateRER } from './caloriesForm.helpers'

describe('Check calculateRER', () => {
  test('should return correct RER', () => {
    expect(calculateRER(4)).toBe(198)
  })

  test('should return correct RER when weight is 0', () => {
    expect(calculateRER(0)).toBe(0)
  })
})
