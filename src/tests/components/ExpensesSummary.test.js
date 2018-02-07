import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';


let expenseCount, expensesTotal, wrapper;
beforeEach(() => {
    wrapper = shallow(<ExpensesSummary
        expenseCount={1}
        expensesTotal={9434}
    />);
});

test('Should render ExpensesSummary correctly with 1 expense', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with multiple expenses', () => {
    wrapper.setProps({expenseCount: 10, expensesTotal: 524090});
    expect(wrapper).toMatchSnapshot();
});
