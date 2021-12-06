import { CsvValidationError } from '../errors';

export const validateCsvFile = data => {
    if (data.length > 20) {
        throw new CsvValidationError('File contains more than 20 rows.');
    }

    data.forEach((row, idx) => {
        if (row.length !== 5) {
            throw new CsvValidationError(
                `Ivalid number of values in row ${idx + 1}.`
            );
        }
    });
};
