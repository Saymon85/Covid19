import React from 'react';
import {
    Grid, 
    FormControl, 
    FormHelperText, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField 
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Autocomplete from '@material-ui/lab/Autocomplete';


const HistoryOptions = (props) => {
    return (
        <Grid container item justify='center' alignItems='baseline' spacing={6} xs={12}>
                  <Grid item>
                    <Autocomplete
                        id='country-select'
                        style={{width: 250, margin:'0 auto'}}
                        size='small'
                        options={props.countryNames}
                        option={{fontSize: 12}}
                        autoHighlight
                        renderOption= {(option) => (
                        <>
                          {option}
                        </>
                        )}
                        onChange={(event, country) => props.onCountrySelect(event, country)}
                        renderInput={(params) => (
                        <TextField 
                            {...params}
                            label='Choose a country'
                            variant='standard'
                            inputProps={{
                                ...params.inputProps
                            }}
                        />   
                        )}
                    />
                  </Grid>
                  <Grid item>
                    <FormControl style={{width: 250}}>
                        <InputLabel id="demo-simple-select-helper-label">Days</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={props.numOfDays}
                            onChange={props.onNumOfDaysSelected}
                          >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={1000}>All</MenuItem>
                          </Select>
                        <FormHelperText>Please select number of last days for showing history</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item style={{marginBottom: 20}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                            disableToolbar
                            disableFuture
                            autoOk
                            disabled={props.dateDisabled}
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Choose specific date"
                            value={props.dateSelected}
                            onChange={props.onDateSelected}
                            invalidDateMessage
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                       />
                    </MuiPickersUtilsProvider>  
                  </Grid>
                </Grid>
    )
}

export default HistoryOptions;