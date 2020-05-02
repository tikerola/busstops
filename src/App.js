import React from 'react';
import Canvas from './canvas/Canvas'
import UI from './ui/UI'
import { Paper } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    background: 'black'
  },

  header: {
    color: '#999',
    fontSize: '2.5em',
    letterSpacing: '0.1em',
    fontFamily: 'Bigelow Rules, cursive'
  },

  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '30px',
    width: '80vw',
    background: 'radial-gradient(circle, rgba(69,69,71,1) 0%, rgba(3,5,13,1) 91%, rgba(0,0,0,1) 100%)'
  },

  headerContainer: {
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

const theme = createMuiTheme({
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

});

function App() {
  const [data, setData] = React.useState({})
  const [drawBusses, setDrawBusses] = React.useState(false)



  return (
    <ThemeProvider theme={theme}>
      <div style={styles.root}>
        <div style={styles.headerContainer}>
        <img src='./assets/images/poorman2.png' alt="poorman" height="100" />
          <h1 style={styles.header}>Köyhän miehen reittiopas</h1>
          <img src='./assets/images/poorman.png' alt="poorman" height="100" />
        </div>
        <Paper elevation={4} style={styles.content}>
          <UI setData={setData} drawBusses={drawBusses} />
          <Canvas path={data.pathWithColor} setDrawBusses={setDrawBusses} />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
