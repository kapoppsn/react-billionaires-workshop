import { divide } from '../divide'

test('2 / 2 should be 1', () => {
    const result = divide(2, 2)
   expect(result).toBe(1)
})

test('2 / 0 should be throw error', () => {
    const result = () => divide(2, 0)
   expect(result).toThrow()
})

test ('2 / 0 should be thrown error',() => {
    expect(() => divide(2,0)).toThrow()
})