import calculateTotal from './functions/calculateTotal.js'

let input = document.querySelector('input')

// Read data input and call function to calculate total 
input.addEventListener(
  'change',
  (e) => {
    let readFile = new FileReader()

    readFile.onload = function () {
      let lines = readFile.result.trim().split('\n')
      // console.log(lines)

      calculateTotal(lines)
    }

    readFile.onerror = (e) => alert(e.target.error.name)

    readFile.readAsText(input.files[0])
  },
  false,
)

