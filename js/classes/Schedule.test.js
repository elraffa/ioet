import { expect } from '@jest/globals';
import Schedule from './Schedule.js';

test('Days are obtained from the schedule', () => { 
    const daysFromSchedule = new Schedule('MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00');
    const expected = [["MO"], ["TU"], ["TH"], ["SA"], ["SU"]]
    expect(daysFromSchedule.getDays()).toStrictEqual(expected);
 })

 test('Start hours are obtained from the schedule', () => { 
    const startHoursFromSchedule = new Schedule('MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00');
    const expected = ['10:00', '10:00', '01:00', '14:00', '20:00']
    expect(startHoursFromSchedule.getStartHours()).toEqual(expected);
 })

 test('End hours are obtained from the schedule', () => { 
    const endHoursFromSchedule = new Schedule('MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00');
    const expected = ['12:00', '12:00', '03:00', '18:00', '21:00']
    expect(endHoursFromSchedule.getEndHours()).toEqual(expected);
 })