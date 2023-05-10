import { render, screen } from '@testing-library/react';
import { CalendarLayout,DAYS_OF_WEEK } from './component/calendar/Calendar.layout';
import moment from 'moment';


test('renders calendar with correct month and year', () => {
  const testDate = new Date('2023-05-10');
  render(<CalendarLayout date={testDate} />);

  const startOfMonth = moment(testDate).startOf('month');
  const monthYearElement = screen.getByText(startOfMonth.format('MMMM YYYY'));
  expect(monthYearElement).toBeInTheDocument();
});

test('renders calendar with correct days of the week', () => {
  const testDate = new Date('2023-05-10');
  render(<CalendarLayout date={testDate} />);
  const daysOfWeekElements = screen.getAllByRole('columnheader');
  expect(daysOfWeekElements).toHaveLength(8);
  DAYS_OF_WEEK.forEach((day, index) => {
    expect(daysOfWeekElements[index+1]).toHaveTextContent(day);
  });
});

test('renders calendar with correct dates and highlights the selected date', () => {
  const testDate = new Date('2023-05-10');
  render(<CalendarLayout date={testDate} />);

  const dateElements = screen.getAllByRole('cell');
  expect(dateElements).toHaveLength(35);  
  expect(dateElements[0]).toHaveTextContent('30'); 
  expect(dateElements[4]).toHaveTextContent('4');
  expect(dateElements[14]).toHaveTextContent('14');
  expect(dateElements[10]).toHaveClass('highlighted');
});

test('does not highlight any date if date prop is not in the current month', () => {
  const testDate = new Date();
  render(<CalendarLayout date={testDate} />);

  const dateElements = screen.getAllByRole('cell');

  dateElements.forEach(element => {
    expect(element).not.toHaveClass('high');
  });
});

test('renders calendar with different starting day of the week', () => {
  const testDate = new Date('2022-07-15');
  render(<CalendarLayout date={testDate} />);

  const daysOfWeekElements = screen.getAllByRole('columnheader');
  expect(daysOfWeekElements).toHaveLength(8);

  expect(daysOfWeekElements[1]).toHaveTextContent('Su');
  expect(daysOfWeekElements[2]).toHaveTextContent('Mo');
  expect(daysOfWeekElements[7]).toHaveTextContent('Sa');
});

test('renders calendar with different month and year', () => {
  const testDate = new Date('2023-05-10');
  render(<CalendarLayout date={testDate} />);

  const startOfMonth = moment(testDate).startOf('month');

  const monthYearElement = screen.getByText(startOfMonth.format('MMMM YYYY'));
  expect(monthYearElement).toBeInTheDocument();

  const dateElements = screen.getAllByRole('cell');
  expect(dateElements).toHaveLength(35);

  expect(dateElements[0]).toHaveTextContent('30'); 
  expect(dateElements[4]).toHaveTextContent('4'); 
});