import React, { useEffect, useRef } from 'react';
import Canvas from './canvas/Canvas'
import UI from './ui/UI'
import { Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/theme'
import initGraph from './routes/initGraph'

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    background: 'black'
  },

  headerAndSubheaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },

  headerContainer: {
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px'
  },

  header: {
    color: '#663826',
    fontSize: '2.5em',
    letterSpacing: '0.1em',
    fontFamily: 'Bigelow Rules, cursive',
    marginBottom: 0
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

function App() {
  const [data, setData] = React.useState({})
  const [drawBusses, setDrawBusses] = React.useState(false)
  const [busStop, setBusStop] = React.useState({ start: '', stop: '' })

  const graph = useRef()

  useEffect(() => {
    graph.current = initGraph()
  }, [])

  useEffect(() => {
    if (busStop.start && busStop.stop) {
      const data = graph.current.shortestPath(busStop.start, busStop.stop)

      setData(data)
    }
  }, [busStop.start, busStop.stop])

  return (
    <ThemeProvider theme={theme}>
      <div style={styles.container}>
        <div style={styles.headerAndSubheaderContainer}>
          <div style={styles.headerContainer}>
            <img src='./assets/images/poorman2.png' alt="poorman" height="80" />
            <h1 style={styles.header}>Köyhän miehen reittiopas</h1>
            <img src='./assets/images/poorman.png' alt="poorman" height="80" />
          </div>
          <div style={{ color: '#777', fontSize: '0.8em', position: 'relative', top: '-10px' }}>
            Valitse pysäkit valikosta tai kartalta
          </div>
        </div>

        <Paper elevation={4} style={styles.content}>
          <UI
            setBusStop={setBusStop}
            path={data.pathWithColor}
            drawBusses={drawBusses}
            distance={data.distance}
            busStop={busStop}
          />

          <Canvas
            path={data.pathWithColor}
            setDrawBusses={setDrawBusses}
            setData={setData}
            setBusStop={setBusStop}
            busStop={busStop}
          />
        </Paper>

      </div>
    </ThemeProvider>
  );
}

export default App;
