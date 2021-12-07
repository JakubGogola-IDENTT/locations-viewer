export const validateCsvFile = data => {
    const errorMessages = [];

    if (data.length === 0) {
        errorMessages.push('File is empty.');
    }

    if (data.length > 20) {
        errorMessages.push(
            `File contains more than 20 rows. Actual: ${data.length}.`
        );
    }

    data.forEach((row, idx) => {
        if (row.length !== 5) {
            errorMessages.push(`Ivalid number of values in row ${idx + 1}.`);
        }
    });

    return errorMessages;
};
