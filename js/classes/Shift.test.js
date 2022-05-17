import { expect } from '@jest/globals';
import Shift from './Shift.js';

test('Check if shift is assigned correctly', () => { 
    const checkShift = new Shift('RENE', 'MO', '18:00', '21:00');
    const expected = 'shiftThree';
    expect(checkShift.getShift()).toEqual(expected);
 })

 test('Check if shift is assigned correctly', () => { 
    const checkShift = new Shift('ASTRID', 'SA', '00:00', '04:00');
    const expected = 'shiftOne';
    expect(checkShift.getShift()).toEqual(expected);
 })

 test('Check if shift is assigned correctly', () => { 
    const checkShift = new Shift('ASTRID', 'SU', '12:00', '14:00');
    const expected = 'shiftTwo';
    expect(checkShift.getShift()).toEqual(expected);
 })

 test('Verify hours are calculated correctly', () => {
     const checkHours = new Shift('ASTRID', 'TU', '00:00', '04:00');
     expect(checkHours.calculateHours()).toBe(4);
 })


 test('Verify hours are calculated correctly', () => {
    const checkHours = new Shift('CHARLES', 'WE', '12:00', '14:00');
    expect(checkHours.calculateHours()).toBe(2);
})

 // To review
 /*
 test('Verify pay per day is correct on Weekday, Second Shift', () => {
     const checkPay = new Shift('RENE', 'TH', '10:00', '13:00');
     expect(checkPay.getPay()).toBe(15)
 })
 */