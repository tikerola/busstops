import React from 'react';
import Canvas from './canvas/Canvas'
import UI from './ui/UI'



const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
}

function App() {
  const [data, setData] = React.useState({})

  
  return (
    <div style={styles}>
      {console.log(data, 'data')}
      <UI setData={setData} />
      <Canvas path={data.pathWithColor} />
    </div>
  );
}

export default App;
