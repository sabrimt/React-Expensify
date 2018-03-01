import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

// const ExpenseList = (props) => (
//     <div>
//         <h1>Expense List</h1>
//         <p><strong>Sort By: </strong>{props.filters.text}</p>
//         {props.expenses.map((expense) => (<p key={expense.description}>{expense.description}</p>))}
//     </div>
// );
//
// const mapStateToProps = (state) => {
//
//     return {
//         expenses: getVisibleExpenses(state.expenses, state.filters),
//         filters: state.filters
//     };
// };


export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map(
                    (expense) => <ExpenseListItem key={expense.id} {...expense} />
                )
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
