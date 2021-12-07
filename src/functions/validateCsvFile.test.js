import { validateCsvFile } from './validateCsvFile';

describe('functions > validateCsvFile', () => {
    it('should not return any error message for valid CSV file', () =>
        expect(
            validateCsvFile([
                ['value1', 'value2', 'value3', 'value4', 'value5'],
            ])
        ).toHaveLength(0));

    describe('should return error message when', () => {
        it('CSV file is empty', () =>
            expect(validateCsvFile([])).toEqual(['File is empty.']));

        it('CSV file has more than 20 rows', () =>
            expect(
                validateCsvFile(
                    Array(21).fill([
                        'value1',
                        'value2',
                        'value3',
                        'value4',
                        'value5',
                    ])
                )
            ).toEqual(['File contains more than 20 rows. Actual: 21.']));

        it('one of the rows has more than 5 columns defined', () =>
            expect(
                validateCsvFile([
                    [
                        'value1',
                        'value2',
                        'value3',
                        'value4',
                        'value5',
                        'value6',
                    ],
                ])
            ).toEqual(['Ivalid number of values in row 1.']));
    });
});
