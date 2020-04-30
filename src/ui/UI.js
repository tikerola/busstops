import React, { useEffect } from 'react'
import graph from '../routes/model'
import { InputLabel, Select, FormControl } from '@material-ui/core'
import data from '../data/data.json'

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '2%',

}

const UI = ({ setData }) => {

    const [state, setState] = React.useState({
        start: '',
        stop: '',
    });



    useEffect(() => {
        if (state.start && state.stop) {
            
            const distance = graph.shortestPath(state.start, state.stop)
            console.log(distance)
            setData(distance)
            setState({ start: '', stop: ''})
        }
    }, [state.start, state.stop, setData])

    const handleChange = (event) => {

        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (
        <div style={styles}>
            
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
            <FormControl >
                <InputLabel htmlFor="päätepysäkki">Päätepysäkki</InputLabel>
                <Select
                    native
                    value={state.stop}
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
        </div>
    )
}

export default UI