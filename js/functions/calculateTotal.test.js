import { exportAllDeclaration } from "@babel/types";
import calculateTotal from './calculateTotal'

describe('Check if result ok', () => {
    test('input whatever', () => {
        expect(
            calculateTotal(['RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00JOHN=MO09:00-15:00,TH12:00-14:00,SU20:00-21:00'])
        ).toEqual(
            ['The amount to pay RENE is 215']
        )
    })
})