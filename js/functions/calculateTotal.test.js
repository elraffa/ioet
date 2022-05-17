import { exportAllDeclaration } from '@babel/types'
import calculateTotal from './calculateTotal'

describe('Check if result ok', () => {
  test('total', () => {
    expect(
      calculateTotal([
        'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00',
      ]),
    ).toEqual(190)
  })
})
