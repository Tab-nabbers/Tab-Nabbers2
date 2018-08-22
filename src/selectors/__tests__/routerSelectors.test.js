import * as routerSelector from '../routerSelectors';

describe('React Router Selectors', () => {
    let props = {
        match: { }
    };
    beforeEach(() => {
        props = {
            match: {
                params: {
                    user: 'newuser'
                }
            }
        }
    });

    describe('Existing user or new user', () => {
        it('should return newuser', () => {
            const params = routerSelector.getParams(props);
            const value = params.user;
            const expectedValue = 'newuser';
    
            expect(value).toEqual(expectedValue);
        });
        
    
        it('should return existed user', () => {
            props.match.params.user = 'existeduser';
            const params = routerSelector.getParams(props);
            const value = params.user;
            const expectedValue = 'existeduser';
            expect(value).toEqual(expectedValue);
        });
    });
});