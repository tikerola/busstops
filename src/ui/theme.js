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
          '&.MuiSelect-select:option': {
            background: '#000',
          },
        }
      }
  
    },
    palette: {
      primary: {
        light: '#ffffff',
        main: '#999',
      },
      secondary: {
        light: '#ffffff',
        main: '#ffffff',
        contrastText: '#000',
      },
      text: {
        primary: '#000',
        secondary: '#999'
      },
      action: {
        active: '#999',
        hover: '#999',
        selected: '#999',
        focus: '#999'
      },
      success: {
        ligth: '#999',
        main: '#999',
        dark: '#999'
      },
      warning: {
        ligth: '#999',
        main: '#999',
        dark: '#999'
      },
      error: {
        ligth: '#999',
        main: '#999',
        dark: '#999'
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    typography: {
      htmlFontSize: 20
    }
  });