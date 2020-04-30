import React from 'react';
import Canvas from './canvas/Canvas'
import UI from './ui/UI'
import { Paper } from '@material-ui/core'

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

function App() {
  const [data, setData] = React.useState({})


  return (
    <div style={styles.root}>
      <h1 style={styles.header}>Köyhän miehen reittiopas</h1>
      <Paper elevation={4} style={styles.content}>
        <UI setData={setData} />
        <Canvas path={data.pathWithColor} />
      </Paper>
    </div>
  );
}

export default App;
