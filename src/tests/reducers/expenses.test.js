import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove an expense by Id', () => {
    const id = expenses[1].id;
    const action = { type: 'REMOVE_EXPENSE', id };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});
test('Should not remove expenses if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '-1'};

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add a new expense', () => {
    const expense = {
        id: '4',
        description: '2000\'s expense',
        note: 'bla',
        amount: 190000,
        createdAt: moment(0).add(30, 'years')
    };
    const action = { type: 'ADD_EXPENSE', expense };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an existant expense By Id', () => {
    const updates = {
        description: '70\'s expense',
        amount: 190,
        createdAt: moment(0)
    };
    const action = { type: 'EDIT_EXPENSE', id: expenses[0].id, updates };
    
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({ ...expenses[0], ...updates });
});
test('Should not edit expense if not found', () => {
    const updates = {
        description: '70\'s expense',
        amount: 190,
        createdAt: moment(0)
    };
    const action = { type: 'EDIT_EXPENSE', id: '-12', updates };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
