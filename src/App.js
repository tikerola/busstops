import React, { useEffect } from 'react';
import Canvas from './canvas/Canvas'
import UI from './ui/UI'
import { Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/theme'
import graph from './routes/model'

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
  },

  header: {
    color: 'green',
    fontSize: '2.5em',
    letterSpacing: '0.1em',
    fontFamily: 'Bigelow Rules, cursive'
  }
}

function App() {
  const [data, setData] = React.useState({})
  const [drawBusses, setDrawBusses] = React.useState(false)
  const [stop, setStop] = React.useState({ start: '', stop: '' })

  useEffect(() => {
    if (stop.start && stop.stop) {
      const data = graph.shortestPath(stop.start, stop.stop)
      console.log(data, 'fuck')
      setData(data)
      
    }
  }, [stop.start, stop.stop])

  return (
    <ThemeProvider theme={theme}>
      <div style={styles.root}>
        <div style={styles.headerContainer}>
          <img src='./assets/images/poorman2.png' alt="poorman" height="100" />
          <h1 style={styles.header}>Köyhän miehen reittiopas</h1>
          <img src='./assets/images/poorman.png' alt="poorman" height="100" />
        </div>

        <Paper elevation={4} style={styles.content}>
          <UI
            setStop={setStop}
            path={data.pathWithColor}
            drawBusses={drawBusses}
            distance={data.distance}
            stop={stop}
          />
          <Canvas
            path={data.pathWithColor}
            setDrawBusses={setDrawBusses}
            setData={setData}
            setStop={setStop}
            stop={stop}
          />
        </Paper>

      </div>
    </ThemeProvider>
  );
}

export default App;
