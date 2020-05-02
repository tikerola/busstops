import { FormControl, InputLabel, Paper, Select, Typography } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import data from '../data/data.json'
import graph from '../routes/model'

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#38423d',
    padding: '20px',
    height: '405px',
    width: '220px',
    marginRight: '50px',
    color: '#999'
}

const UI = ({ setData, drawBusses }) => {

    const [state, setState] = React.useState({
        start: '',
        stop: '',
    });

    const [distance, setDistance] = React.useState()
    const [path, setPath] = React.useState()

    let selectRef1 = React.useRef()
    let selectRef2 = React.useRef()

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
        if (!state.start && !state.end) {
            selectRef1.current.blur()
            selectRef2.current.blur()
        }
    }, [state.start, state.end])

    const handleChange = (event) => {

        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (
        <Paper style={containerStyles} elevation={8}>
            <div>
                <FormControl >
                    <InputLabel htmlFor="age-native-simple">Lähtöpysäkki</InputLabel>
                    <Select
                        native
                        inputRef={selectRef2}
                        value={state.start}
                        onChange={handleChange}
                        style={{ width: '200px' }}
                        inputProps={{
                            name: 'start',
                            id: 'age-native-simple'
                        }}
                    >
                        <option aria-label="None" value="" />
                        {data.pysakit.map(pysakki => (
                            <option key={pysakki + '1'} value={pysakki}>{pysakki}</option>
                        ))}

                    </Select>
                </FormControl>
            </div>
            <FormControl  >
                <InputLabel htmlFor="päätepysäkki">Päätepysäkki</InputLabel>
                <Select
                    native
                    value={state.stop}
                    inputRef={selectRef1}
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
                        <Typography style={{ marginBottom: '15px' }}>Reitti: {path[0].vertex} - {path[path.length - 1].vertex}, Lyhin matka: {distance}</Typography>
                        {path.map((point, index) => {
                            return <div key={index}>
                                {point.color && drawBusses && <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <span style={{ width: '100px' }}>{point.vertex} - {path[index + 1].vertex}</span>
                                    <img src={`./assets/images/busicon${point.color}.png`} height="15" alt="busicon" />
                                </div>
                                }
                            </div>
                        })}

                    </div>
                )
                }
                {
                    distance === Infinity && (
                        <Typography style={{ color: 'red' }}>Linjat eivät valitettavasti vie sinua perille</Typography>
                    )
                }
            </div>
        </Paper>
    )
}

export default withTheme(UI)