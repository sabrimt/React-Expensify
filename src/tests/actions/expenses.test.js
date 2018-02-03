import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123test', { note: 'Check this note', expense: 'testing bill' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123test',
        updates: {
            expense: 'testing bill',
            note: 'Check this note'
        }
    });
});

test('Should setup add expense action object with provided values', () => {
    const testExpense = {
        description: 'desCheck',
        note: 'check',
        amount: 20000,
        createdAt: 250000
    };
    const action = addExpense(testExpense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...testExpense,
            id: expect.any(String)
        }
    });
});
test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
