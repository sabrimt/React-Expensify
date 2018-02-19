import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const uid = 'userid123';
    const action = { type: 'LOGIN', uid };

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('Should clear uid for logout', () => {
    const action = { type: 'LOGOUT' };

    const state = authReducer({ uid: 'userid123' }, action);
    expect(state).toEqual({});
});
