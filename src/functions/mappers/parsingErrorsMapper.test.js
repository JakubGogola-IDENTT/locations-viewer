import { parsingErrorsMapper } from './parsingErrorsMapper';

describe('functions > mappers > parsingErrorsMapper', () => {
    it('should map CSV parsing errors', () =>
        expect(
            parsingErrorsMapper([
                { message: 'Unrecognized delimiter' },
                { message: 'Unexpected character' },
            ])
        ).toEqual(['Unrecognized delimiter', 'Unexpected character']));
});
