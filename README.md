# IOET Coding Challenge

## Instructions

The company ACME offers their employees the flexibility to work the hours they want. They will pay for the hours worked based on the day of the week and time of day, according to the following table:

Monday - Friday

00:01 - 09:00 25 USD

09:01 - 18:00 15 USD

18:01 - 00:00 20 USD

Saturday and Sunday

00:01 - 09:00 30 USD

09:01 - 18:00 20 USD

18:01 - 00:00 25 USD

The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times during which they worked. The following abbreviations will be used for entering data:

MO: Monday

TU: Tuesday

WE: Wednesday

TH: Thursday

FR: Friday

SA: Saturday

SU: Sunday

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our two examples below.

Output: indicate how much the employee has to be paid

For example:

Case 1:

INPUT

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00

OUTPUT:

The amount to pay RENE is: 215 USD

Case 2:

INPUT

ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:

The amount to pay ASTRID is: 85 USD

# How to run locally

To check the solution to this challenge:

1. Clone the repo: `git clone https://github.com/elraffa/ioet.git`
2. Open the downloaded folder and open the file `index.html` in your favorite browser.
3. Follow the instructions on the browser.

# Solution

The solution was arrived in three main steps:

1. Get the input data and parse it to organize it in a way it can be worked with. 
2. Create classes for *Employee*, *Schedule* and *Shift* to separate different functions 
3. Calculate total hours worked by each employee based on the results received by the *Schedule* and *Shift* classes.

The code has been structured using SOLID principles and the concept of separation of concerns, dividing it into classes that have specific functions to make the code cleaner and more straightforward. The goal was to make it efficient and at the same time solve the problem successfully. 