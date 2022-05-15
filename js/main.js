import Shift from './classes/Shift.js'
import Employee from './classes/Employee.js'
import Schedule from './classes/Schedule.js'

let data = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
JOHN=MO09:00-15:00,TH12:00-14:00,SU20:00-21:00
OSCAR=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
GLADYS=MO10:00-12:00,TH12:00-16:00,SU20:00-21:00
ALBERT=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

let lines = data.split('\n')
// console.log(lines)

// Iterate each line of the input to get name and schedule
lines.forEach((line, index) => {
  let [name, schedule] = line.split('=')

  // Create employee and schedule instances
  let employee = new Employee(name)
  let scheduleObj = new Schedule(schedule)
  let days = scheduleObj.getDays()

  // Create an object with all instances of shifts
  let shift = {}
  // Initialize total pay variable
  let totalPay = 0

  // Iterate each day to get final calculations
  days.forEach((day, index) => {
    if (day) {
      let startTime = scheduleObj.getStartHours()
      let endTime = scheduleObj.getEndHours()

      // Create new shifts instances to get each pay day and Total Pay
      shift[name] = new Shift(name, day, startTime[index], endTime[index])

      Object.entries(shift).forEach((item) => {
        let pay = item[1].getPay()
        totalPay += pay
      })
    }
  })
  //console.log(employees)
  console.log(`The amount to pay ${employee.getName()} is ${totalPay}`)
})
