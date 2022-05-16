import { shiftsStart, shiftsEnd, rates, reWeekdays, reWeekends } from "../constants.js"
import convertTimeToNumber from "../utils.js"

// Shift class accepts name, day, startTime and endTime to get the specific shift, hours worked and pay 
class Shift {
    constructor(name, day, startTime, endTime) {
      this.name = name;
      this.day = day;
      this.startTime = startTime 
      this.endTime = endTime
    }

    getName = () => {
        return this.name;
    }
 
    getShift = () => {
        if (this.startTime >= '00:00' && this.endTime <= '09:00') {
            return 'shiftOne'
        } else if (this.startTime >= '09:00' && this.endTime <= '18:00') {
            return 'shiftTwo'
        } else if (this.startTime >= '18.00' && this.endTime <= '23:59') {
            return 'shiftThree'
        }
    }

    calculateHours = () => {
        let startTime = convertTimeToNumber(this.startTime)
        let endTime = convertTimeToNumber(this.endTime)
        let hours = endTime - startTime
        return hours
    }

    getPay = () => {
        let pay = 0;
        let rate = rates[this.getShift()]       
        if (this.day[0].match(reWeekdays)) {
            let pay = rate['weekday'] * this.calculateHours();
            return pay;
        } else if (this.day[0].match(reWeekends)) {
            let pay = rate['weekend'] * this.calculateHours();
            return pay;
        }
    }

} 

export default Shift;