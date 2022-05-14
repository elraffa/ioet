import { regexDays, regexHours } from '../constants.js'

class Schedule {
    constructor(schedule) {
      this.schedule = schedule
    }
  
    getDays () {
      let day = []
      let scheduleArray = this.schedule.split(',')
      scheduleArray.forEach((item) => {
        day.push(item.match(regexDays))
      })
      return day
    }
  
    getStartHours () {
      let hours = []
      let scheduleArray = this.schedule.split(',')
      scheduleArray.forEach((item) => {
        hours.push(item.match(regexHours)[0])
      })
      return hours
    }
  
    getEndHours () {
      let hours = []
      let scheduleArray = this.schedule.split(',')
      scheduleArray.forEach((item) => {
  
        hours.push(item.match(regexHours)[1])
      })
      return hours
    }
  }

  export default Schedule;