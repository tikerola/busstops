import { FormControl, InputLabel, Paper, Select, Typography } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import data from '../challengeData/data.json'
import { DirectionsBus } from '@material-ui/icons';

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

const UI = ({ drawBusses, path, distance, busStop, setBusStop }) => {

    let selectRef1 = React.useRef()
    let selectRef2 = React.useRef()

    // Selectien focus pois valinnan jälkeen
    useEffect(() => {
        if (!busStop.start && !busStop.stop) {
            selectRef1.current.blur()
            selectRef2.current.blur()
        }
    }, [busStop.start, busStop.stop])


    const handleChange = (event) => {

        const name = event.target.name;
        setBusStop(prevState => ({
            ...prevState,
            [name]: event.target.value,
        }));
    };


    return (
        <Paper style={containerStyles} elevation={8}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                <DirectionsBus style={{ marginRight: '5px', paddingBottom: '4px' }} />

                <FormControl >
                    <InputLabel htmlFor="lähtöpysäkki">Lähtöpysäkki</InputLabel>
                    <Select
                        native
                        inputRef={selectRef2}
                        value={busStop.start}
                        onChange={handleChange}
                        style={{ width: '170px' }}
                        inputProps={{
                            name: 'start',
                            id: 'lähtöpysäkki'
                        }}
                    >
                        <option aria-label="None" value="" />
                        {data.pysakit.map(pysakki => (
                            <option key={pysakki + '1'} value={pysakki}>{pysakki}</option>
                        ))}

                    </Select>
                </FormControl>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                <DirectionsBus style={{ marginRight: '5px', paddingBottom: '4px' }} />
                <FormControl  >
                    <InputLabel htmlFor="päätepysäkki">Päätepysäkki</InputLabel>
                    <Select
                        native
                        value={busStop.stop}
                        inputRef={selectRef1}
                        onChange={handleChange}
                        style={{ width: '170px' }}
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
            <Paper elevation={4} style={{ marginTop: '30px', background: '#5c3835', padding: '10px', width: '90%', height: '65%', color: '#999' }}>
                <Typography style={{ textAlign: 'center', fontSize: '1.0em', textDecoration: 'underline', marginBottom: '10px'}}>Tulokset:</Typography>
                {distance > 0 && distance !== Infinity && (
                    <div>
                        <Typography style={{ marginBottom: '15px', textAlign: 'center' }}>Reitti: {path[0].vertex} - {path[path.length - 1].vertex}, Lyhin matka: {distance}</Typography>
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
                    distance === 0 && (
                        <Typography>Tähän et tarvitse bussia!</Typography>
                    )
                }
                {
                    distance === Infinity && (
                        <Typography style={{ color: 'red' }}>Linjat eivät valitettavasti vie sinua perille</Typography>
                    )
                }

            </Paper>
        </Paper>
    )
}

export default withTheme(UI)