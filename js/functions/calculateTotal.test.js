// import { exportAllDeclaration } from "@babel/types";
const calculateTotal = require("./calculateTotal")

describe('Check if result ok', () => {
    test('input whatever', () => {
        exportAllDeclaration(
            calculateTotal('RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00')
        ).toStrictEqual({
            'Rene': 0
        })
    })
})