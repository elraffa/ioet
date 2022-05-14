const shiftOneStart = '00:01'
const shiftOneEnd = '09:00'
const shiftTwoStart = '09:01'
const shiftTwoEnd = '18:00'
const shiftThreeStart = '18:01'
const shiftThreeEnd = '23:59'

export const rates = {
    "shiftOne": {
        "weekday": 25,
        "weekend": 30
    },
    "shiftTwo": {
        "weekday": 15,
        "weekend": 20
    },
    "shiftThree": {
        "weekday": 20,
        "weekend": 25
    },
}

export const shiftsStart = [ shiftOneStart, shiftTwoStart, shiftThreeStart ]
export const shiftsEnd = [ shiftOneEnd, shiftTwoEnd, shiftThreeEnd ]
export const weekday = ['MO', 'TU', 'WE', 'TH', 'FR']
export const weekend = ['SA', 'SU']

// Regular Expressions //
const reShift = /^([0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2})$/
const reWeekday = /^([A-Za-z]{2})$/
export const reWeekdays = /(MO|TU|WE|TH|FR)/g
export const reWeekends = /(SA|SU)/g
export const regexDays = /(MO|TU|WE|TH|FR|SA|SU)/g
export const regexHours = /([0-9]{2}:[0-9]{2})/g