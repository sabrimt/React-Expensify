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
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map(
                    (expense) => <ExpenseListItem key={expense.id} {...expense} />
                )
            )
        }
        {}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
