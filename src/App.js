import React from 'react';
import graph from './routes/model'

const distance = graph.shortestPath('A', 'P')

function App() {
  console.log(distance)
  return (
    <div>
      hello
    </div>
  );
}

export default App;
