import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light:'#4f545a',
            main: '#393e46',
            dark:'#1c2127'
        },
        secondary: {
            light: '#71d6b5',
            main: '#4ecca3',
            dark: '#3ea382'
        },
        background: {
            default: '#232931'
        }
    }
})

export default theme