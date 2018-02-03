import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

// Default filters object
const defaultFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


/****       TESTS       ****/
test('Should filter by text value', () => {
    const filters = {...defaultFilters, text: 'bill'};

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter by start date', () => {
    const filters = {...defaultFilters, startDate: moment(0)};

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('Should filter by end date', () => {
    const filters = { ...defaultFilters, endDate: moment(0).add(6, 'days') };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should sort by amount', () => {
    const filters = { ...defaultFilters, sortBy: 'amount' };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('Should sort by date', () => {
    const result = selectExpenses(expenses, defaultFilters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
