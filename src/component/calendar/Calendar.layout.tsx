import React from 'react';
import moment from 'moment';
import { CalendarProps } from '../../props/Calendar.props';
import "./Calendar.css"

export const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const CalendarLayout: React.FC<CalendarProps> = ({ date }) => {
  const startOfMonth = moment(date).startOf('month');
  const endOfMonth = moment(date).endOf('month');
  const startDate = moment(startOfMonth).startOf('week');
  const endDate = moment(endOfMonth).endOf('week');
  const weeks: moment.Moment[][] = [];
  let days: moment.Moment[] = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = moment(day).add(1, 'day');
    }
    weeks.push(days);
    days = [];
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={7}>{startOfMonth.format('MMMM YYYY')}</th>
        </tr>
        <tr>
          {DAYS_OF_WEEK.map(dayOfWeek => (
            <th key={dayOfWeek}>{dayOfWeek}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map(day => {
              const isSameDate = day.isSame(date, 'day');
              const className = isSameDate ? 'highlighted' : '';
              return (
                <td key={day.format('YYYY-MM-DD')} className={className}>
                  {day.format('D')}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
