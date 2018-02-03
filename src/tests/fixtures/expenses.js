import moment from 'moment';

// List of expenses for testing
export default [{
    id: '1',
    description: 'Gum',
    note: 'balali',
    amount: 190,
    createdAt: 0
}, {
    id: '2',
    description: 'PC bill',
    note: 'info',
    amount: 70000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Gas bill',
    note: '',
    amount: 5000,
    createdAt: moment(0).add(30, 'days').valueOf()
}];
