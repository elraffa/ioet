import Shift from './classes/Shift.js'
import Employee from './classes/Employee.js'
import Schedule from './classes/Schedule.js'

let data = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
JOHN=MO09:00-15:00,TH12:00-14:00,SU20:00-21:00
OSCAR=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
GLADYS=MO10:00-12:00,TH12:00-16:00,SU20:00-21:00
ALBERT=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

// Constants //
const weekday = ['MO', 'TU', 'WE', 'TH', 'FR']
const weekend = ['SA', 'SU']
const shifts = ['00:01-09:00', '09:01-18:00', '18:01-23:59']

let lines = data.split('\n')
// console.log(lines)

let employees = []

lines.forEach((line, index) => {
  let [name, schedule] = line.split('=')
  //employees.push(name)

  let employee = new Employee(name)
  let scheduleObj = new Schedule(schedule)
  let days = scheduleObj.getDays()
  
  // Create an object with all instances of shifts
  let shift = {}
  // Initialize total pay variable
  let totalPay = 0  

  days.forEach((day, index) => {
    if (day) {
      let startTime = scheduleObj.getStartHours()
      let endTime = scheduleObj.getEndHours()

      shift[name] = new Shift(name, day, startTime[index], endTime[index])

      Object.entries(shift).forEach(item => {

          let pay = item[1].getPay()
          totalPay += pay
         
         //console.log(employee.name, totalPay)
         //return employee.name, employee.totalPay
      })

      const calculateTotalPay = (employees) => {
        let totalPay = []
        employees.forEach((name) => {
          // console.log(item)
          shift[name] = new Shift(name, day, startTime[index], endTime[index])
          let pay = shift.getPay()
          console.log(pay)  
          console.log(totalPay)
          return totalPay
        })
      }
   
       calculateTotalPay(employees)

    }
  })
  //console.log(employees)
  console.log(`The amount to pay ${employee.getName()} is ${totalPay}`)
})
