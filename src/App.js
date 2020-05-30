import React, { useEffect, useRef } from 'react';
import Canvas from './canvas/Canvas'
import UI from './ui/UI'
import { Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/theme'
import initGraph from './routes/initGraph'
import './app.styles.scss'


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
      <div className="app-container">
        <div className="app-headerAndSubheaderContainer">
          <div className="app-headerContainer">
            <img src='./assets/images/poorman2.png' alt="poorman" height="80" />
            <h1 className="app-header">Köyhän miehen reittiopas</h1>
            <img src='./assets/images/poorman.png' alt="poorman" height="80" />
          </div>
          <div className="app-subheader-lg">
            Valitse pysäkit valikosta tai kartalta
          </div>
          <div className="app-subheader-md">
            Valitse pysäkit valikosta
          </div>
        </div>

        <Paper elevation={4} className="app-content">
          <UI
            setBusStop={setBusStop}
            path={data.pathWithColor}
            drawBusses={drawBusses}
            distance={data.distance}
            busStop={busStop}
          />
          <div className="canvas">
            <Canvas
              path={data.pathWithColor}
              setDrawBusses={setDrawBusses}
              setData={setData}
              setBusStop={setBusStop}
              busStop={busStop}
            />
          </div>
        </Paper>

      </div>
    </ThemeProvider>
  );
}

export default App;
