import React from 'react';
import graph from './routes/model'
import Canvas from './canvas/Canvas'

const distance = graph.shortestPath('B', 'P')

function App() {
  console.log(distance)
  return (
    <div>
      <Canvas path={distance.pathWithColor} />
    </div>
  );
}

export default App;
