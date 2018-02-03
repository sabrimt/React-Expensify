import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Default state object
const defaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({ ...defaultState });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should sort by date', () => {
    const currentState = { ...defaultState, sortBy: 'amount' };
    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const text = 'testing my filters';
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('Should set startDate filter', () => {
    const startDate = moment(0).add(40, 'years');
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate filter', () => {
    const endDate = moment(0).add(30, 'years');
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});
