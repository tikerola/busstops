import React, { useEffect } from 'react'
import graph from '../routes/model'
import { InputLabel, Select, FormControl, Paper, Typography } from '@material-ui/core'
import data from '../data/data.json'

const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#c7c6d3',
    padding: '20px',
    height: '405px',
    width: '250px',
    marginRight: '50px',
    color: 'black'
}

const UI = ({ setData }) => {

    const [state, setState] = React.useState({
        start: '',
        stop: '',
    });

    const [distance, setDistance] = React.useState()
    const [path, setPath] = React.useState()

    let distanceRef = React.useRef()

    useEffect(() => {
        if (state.start && state.stop) {
            const data = graph.shortestPath(state.start, state.stop)
            
            setDistance(data.distance)
            setPath(data.pathWithColor)
            setData(data)
            setState({ start: '', stop: '' })
            
        }
    }, [state.start, state.stop, setData])

    useEffect(() => {
        if (!state.start && !state.end)
            distanceRef.current.blur()

    }, [state.start, state.end])

    const handleChange = (event) => {

        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (
        <Paper style={styles} elevation={8}>
            <h2>Valitse reitti</h2>
            <FormControl >
                <InputLabel htmlFor="age-native-simple">Lähtöpysäkki</InputLabel>
                <Select
                    native
                    value={state.start}
                    onChange={handleChange}
                    style={{ width: '200px' }}
                    inputProps={{
                        name: 'start',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {data.pysakit.map(pysakki => (
                        <option key={pysakki + '1'} value={pysakki}>{pysakki}</option>
                    ))}

                </Select>
            </FormControl>
            <FormControl  >
                <InputLabel htmlFor="päätepysäkki">Päätepysäkki</InputLabel>
                <Select
                    native
                    value={state.stop}
                    inputRef={distanceRef}
                    onChange={handleChange}
                    style={{ width: '200px' }}
                    inputProps={{
                        name: 'stop',
                        id: 'päätepysäkki',
                    }}
                >
                    <option aria-label="None" value="" />
                    {data.pysakit.map(pysakki => (
                        <option key={pysakki + '2'} value={pysakki}>{pysakki}</option>
                    ))}
                </Select>
            </FormControl>
            <div style={{ marginTop: '30px' }}>
                {distance && distance !== Infinity && (
                    <div>
                        <Typography>Reitti: {path[0].vertex} - {path[path.length - 1].vertex}</Typography>
                        <Typography>Lyhin matka: {distance}</Typography>
                    </div>
                )
                }
                {
                    distance === Infinity && (
                        <Typography style={{ color: 'red'}}>Linjat eivät valitettavasti vie sinua perille</Typography>
                    )
                }
            </div>
        </Paper>
    )
}

export default UI