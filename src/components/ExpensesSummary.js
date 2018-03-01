import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, storedExpensesCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
            </h1>
            {storedExpensesCount > expenseCount && (
                <small className="page-header__sub-title">
                    <span>{storedExpensesCount}</span> stored Expenses. Clear date filter to view.
                </small>
            )}
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
)};

const mapStateToProps = ((state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    const storedExpensesCount = state.expenses.length;
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        storedExpensesCount: storedExpensesCount
    }
});

export default connect(mapStateToProps)(ExpensesSummary);
