import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <h4>
            viewing {props.expenseCount} expense{props.expenseCount !== 1 && 's'} totalling {
                numeral(props.expensesTotal / 100).format('$0,0.00')
            }
        </h4>
    </div>
);

const mapStateToProps = ((state) => ({
    expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
}));

export default connect(mapStateToProps)(ExpensesSummary);
