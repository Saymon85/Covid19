import React from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableRow, 
    Grid,
    TableHead, 
   } from '@material-ui/core';
   import classes from './Table.module.css';


const DataTable = (props) => {
    const { statistics } = props;
    const tableHeadings = ['Country', 'Total Cases', 'New Cases', 'Total Deaths', 'New Deaths', 'Total Recovered', 'Active Cases', 'Critical', 'Total Tested'];

    console.log(statistics);
    return (
        <Grid xs={12} sm={12} item className={classes.wrap}>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableHeadings.map((heading, i) => {
                            return (
                                <TableCell variant='head' key={heading + i}>{heading}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {statistics.map(item => {
                        return ( 
                            <TableRow key={item.country}>
                                <TableCell>       
                                    {item.country}
                                </TableCell>
                                <TableCell>
                                    {item.cases.total}                                   
                                </TableCell>
                                <TableCell style={{background:'#fff59d'}}>
                                    {item.cases.new}
                                </TableCell>
                                <TableCell>
                                    {item.deaths.total}
                                </TableCell>
                                <TableCell style={{background:'#f44336', color:'#fff'}}>
                                    {item.deaths.new ? item.deaths.new : 0} 
                                </TableCell>
                                <TableCell>
                                    {item.cases.recovered}
                                </TableCell>
                                <TableCell>
                                    {item.cases.active}   
                                </TableCell>
                                <TableCell  >
                                    {item.cases.critical}
                                </TableCell>
                                <TableCell  >
                                    {item.tests.total}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Grid>
    )
}

export default DataTable;