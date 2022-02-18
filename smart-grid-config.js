var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '3rem', /* gutter width px || % || rem */
    mobileFirst: true, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '3rem' /* side fields */
    },
    breakPoints: {
        xxl: {
            width: '1800px', /* -> @media (max-width: 1800px) */
        },
        xl: {
            width: '1200px', /* -> @media (max-width: 1200px) */
        },
        lg: {
            width: '992px', /* -> @media (max-width: 992px) */
        },
        md: {
            width: '768px',
        },
        sm: {
            width: '480px',
            // fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '0'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./src/scss/mixins', settings);
