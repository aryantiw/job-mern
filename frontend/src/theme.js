// import { createTheme } from '@mui/material/styles';
import { grey, cyan} from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });

export const themeColors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: cyan[500],
                    white: "#fff"
                },
                secondary: {
                    main: cyan[400],
                    midNightBlue: "#003366"
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#000000",
                    white: "#fff",
                },
                secondary: {
                    main: grey[800],
                    white: "#fff",
                },
                background: {
                    default: "#1e1e1e",
                },
                text: {
                    primary: '#000000',
                    secondary: grey[800],
                },
            }),
    },
});
