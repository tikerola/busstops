import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
    overrides: {
      MuiInputBase: {
        input: {
          color: '#999'
        }
      },
      MuiInput: {
        underline: {
          '&.MuiInput-underline:before': {
            //border: 'none',
          },
          '&.MuiInput-underline:after': {
            border: 'none',
          },
          '&.MuiInput-underline:focus': {
            border: 'none',
          },
        }
      },
      MuiInputLabel: {
        root: {
          '&.Mui-focused': {
            color: '#999'
          },
          color: '#999'
        },
      },
      MuiOutlinedInput: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#999',
            },
            '&:hover fieldset': {
              borderColor: '#999',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#999',
            },
          },
        }
      },
      MuiSelect: {
        select: {
          '&.MuiSelect-select:not([multiple]) option': {
            background: '#663826',
            color: '#ffffff'
          },
        }
      }
    },
    palette: {
      primary: {
        main: '#999',
      },
      text: {
        secondary: '#999'
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    typography: {
      htmlFontSize: 20
    }
  });