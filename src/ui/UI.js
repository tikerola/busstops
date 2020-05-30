import { FormControl, InputLabel, Paper, Select, Typography } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import data from '../challengeData/data.json'
import { DirectionsBus } from '@material-ui/icons';
import './ui.styles.scss'



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
        <Paper className="ui-container main-container" elevation={8}>
            <div className="ui-selects">
                <div className="ui-selectContainer">
                    <DirectionsBus className="ui-busIcon" />

                    <FormControl >
                        <InputLabel htmlFor="lähtöpysäkki">Lähtöpysäkki</InputLabel>
                        <Select
                            native
                            inputRef={selectRef2}
                            value={busStop.start}
                            onChange={handleChange}
                            className="ui-selectInput"
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
                <div className="ui-selectContainer">
                    <DirectionsBus className="ui-busIcon" />
                    <FormControl  >
                        <InputLabel htmlFor="päätepysäkki">Päätepysäkki</InputLabel>
                        <Select
                            native
                            value={busStop.stop}
                            inputRef={selectRef1}
                            onChange={handleChange}
                            className="ui-selectInput"
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
            </div>
            <Paper elevation={4} className="ui-resultContainer result-container">
                <Typography className="ui-resultTitle">Tulokset:</Typography>
                {distance > 0 && distance !== Infinity && (
                    <div>
                        <Typography className="ui-resultRoute">Reitti: {path[0].vertex} - {path[path.length - 1].vertex}, Lyhyin matka: {distance}</Typography>
                        {!drawBusses && <div className="ui-loading">Ladataan...</div>}
                        {path.map((point, index) => {
                            return <div key={index} className="ui-resultRouteListContainer">
                                {point.color && drawBusses && <div className="ui-resultRouteList">
                                    <span className="ui-resultVertex">{point.vertex} - {path[index + 1].vertex}</span>
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
                        <Typography className="ui-resultRoute">Tähän et tarvitse bussia!</Typography>
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