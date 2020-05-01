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

  }
}

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        
        '&.MuiInput-underline:before': {
          border: 'none',
          
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
        }
      },
    }
    
  },
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ff4400',
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


  return (
    <ThemeProvider theme={theme}>
      <div style={styles.root}>
        <h1 style={styles.header}>Köyhän miehen reittiopas</h1>
        <Paper elevation={4} style={styles.content}>
          <UI setData={setData} />
          <Canvas path={data.pathWithColor} />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
