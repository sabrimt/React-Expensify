import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

/*****   Creating a store with a default state   *****/
const store = createStore((state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

// Watch for store state every time it gets changed
const unsubscribe = store.subscribe(() => {
    console.log('-- Store state just changed -- ', store.getState());
});


// Setting actions to be able to change the state values

// store.dispatch({
//     type: 'INCREMENT'
// });
store.dispatch(incrementCount());
console.log(`: After incrementing`);
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}));
console.log(`: After incrementing`);


// Recall the function to unsubscribe
// unsubscribe();

// store.dispatch({
//     type: 'DECREMENT'
// });
store.dispatch(decrementCount());
console.log(`: After decrementing`);
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
store.dispatch(decrementCount({decrementBy: 4}));
console.log(`: After decrementing`);

// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());
console.log(`: After Reset`);


// Dispatching actions with required values
// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({count: 101}));
