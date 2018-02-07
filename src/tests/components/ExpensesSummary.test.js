import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';


let expenseCount, expensesTotal, wrapper;
beforeEach(() => {
    expenseCount = 1;
    expensesTotal = 9434;
    wrapper = shallow(<ExpensesSummary
        expenseCount={expenseCount}
        expensesTotal={expensesTotal}
    />);
});

test('Should render ExpensesSummary correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render render ExpensesSummary with 1 expense info', () => {
    expect(wrapper.find('h4').text()).toBe('viewing 1 expense totalling $94.34');
});

test('Should render render ExpensesSummary with 2 expense info', () => {
    wrapper.setProps({expenseCount: 2});
    expect(wrapper.find('h4').text()).toBe('viewing 2 expenses totalling $94.34');
});
