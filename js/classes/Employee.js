import Shift from '../classes/Shift.js'

class Employee {
    constructor(name) {
      this.name = name
    }
  
    getName = () => {
      return this.name
    }

    addPay = (pay) => {
      let totalPay = 0;
      totalPay += pay;
      return totalPay;
    }

  }

export default Employee