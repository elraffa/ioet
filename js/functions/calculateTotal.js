import Shift from '../classes/Shift.js'
import Employee from '../classes/Employee.js'
import Schedule from '../classes/Schedule.js'

let results = document.querySelector('#results')
let resultsText = []

const calculateTotal = (lines) => {
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

    console.log(`The amount to pay ${employee.getName()} is ${totalPay}`)

    resultsText.push(
      `<p>The amount to pay ${employee.getName()} is: ${totalPay}<p>`,
    )

    results.innerHTML = `<h2>Results:</h2> ${resultsText.toString().replace(/,/g, '\n')}`
  })
}

export default calculateTotal
