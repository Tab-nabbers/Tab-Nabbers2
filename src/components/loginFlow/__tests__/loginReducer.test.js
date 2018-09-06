import loginReducer from '../loginFlowReducer';
import * as types from '../../../actions/actionTypes';

describe('Sign In', () => {
    let state;
    beforeEach(() => {
        state = {
            email: '',
            password: '',
            name: '',
            isSignInCompleted: false,
            isSignUpCompleted: false,
        };
    });

    describe('On Sign In', () => {
        const action = {
            type: types.ON_SIGNIN,
            email: 'accimeesterlin@yahoo.com',
            password: '12345'
        };

        it('should update sign in email', () => {
            const newState = loginReducer(state, action);
            const expectedEmail = 'accimeesterlin@yahoo.com';
            expect(newState.email).toEqual(expectedEmail);
        });

        it('should update sign in password', () => {
            const newState = loginReducer(state, action);
            const expectedPassword = '12345';
            expect(newState.password).toEqual(expectedPassword);
        });
    });

    describe('On Sign Up', () => {
        const action = {
            type: types.ON_SIGN_UP,
            email: 'test@hotmail.com',
            password: '123',
            name: 'John Doe'
        };
        it('should update sign up email', () => {
            const newState = loginReducer(state, action);
            const expectedEmail = 'test@hotmail.com';
            expect(newState.email).toEqual(expectedEmail);
        });

        it('should update sign up password', () => {
            const newState = loginReducer(state, action);
            const expectedPassword = '123';
            expect(newState.password).toEqual(expectedPassword);
        });

        it('should update sign up name', () => {
            const newState = loginReducer(state, action);
            const expectedName = 'John Doe';
            expect(newState.name).toEqual(expectedName);
        });

    });


});