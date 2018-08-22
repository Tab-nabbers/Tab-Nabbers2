import * as selectors from '../loginSelectors';

describe('Login Selectors', () => {
    let state = {

    };

    beforeEach(() => {
        state = {
            loginCredentials: {
                isSignInCompleted: true,
                isSignUpCompleted: true
            }
        };
    });

    it('should return isSignInCompleted', () => {
        const isSignInCompleted = selectors.getSignInStatus(state);

        expect(isSignInCompleted).toBeTruthy();
    });

    it('should return isSignUpCompleted', () => {
        const isSignUpCompleted = selectors.getSignUpStatus(state);

        expect(isSignUpCompleted).toBeTruthy();
    });
});