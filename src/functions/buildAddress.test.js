import { buildAddress } from './buildAddress';

describe('functions > buildAddress', () => {
    describe('should build address when', () => {
        it('all arguments are defined', () =>
            expect(
                buildAddress(
                    'Massachusetts',
                    'Boston',
                    '2137',
                    'One International Place'
                )
            ).toBe('Massachusetts Boston 2137 One International Place'));

        it('some arguments are not defined', () =>
            expect(
                buildAddress('', 'Boston', null, 'One International Place')
            ).toBe('Boston One International Place'));
    });
});
