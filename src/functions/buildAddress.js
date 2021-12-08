export const buildAddress = (state, city, zip, address) =>
    [state, city, zip, address].filter(v => !!v).join(' ');
