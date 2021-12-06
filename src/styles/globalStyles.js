export const globalStyles = {
    '@global': {
        html: {
            width: '100%',
            height: '100%',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            boxSizing: 'border-box',
        },
        '*, *::before, *::after': {
            boxSizing: 'inherit',
        },
        body: {
            width: '100%',
            height: '100%',
            fontSize: 15,
            lineHeight: '22px',
            fontWeight: 400,
            backgroundColor: '#fff',
            color: '#424d57',
            padding: 0,
            margin: 0,
            fontFamily: '"Source Sans Pro", sans-serif',
        },
        h1: {
            fontSize: 32,
            lineHeight: '40px',
            fontWeight: 600,
            margin: 0,
        },
        h2: {
            fontSize: 24,
            lineHeight: '28px',
            fontWeight: 600,
            margin: 0,
        },
        h3: {
            fontSize: 20,
            lineHeight: '24px',
            fontWeight: 600,
            margin: 0,
        },
        h4: {
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 600,
            margin: 0,
        },
        a: {
            color: '#4384f5',
            textDecoration: 'underline',
        },
        svg: {
            fill: '#424d57',
        },
        '#root': {
            height: '100%',
        },
    },
};
