import React, { Component } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';


class Header extends Component {
    state = {
        value: 0
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue})
    }

    render() {
        return (
            <Paper square style={{backgroundColor: '#42a5f5'}}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                style={{color:'#fff'}}    
                centered 
              >
                <Tab component={Link} to='/' label="Global" />
                <Tab component={Link} to='/country' label="By Country" />
                <Tab component={Link} to='/history' label="History Graphs" />
              </Tabs>
          </Paper>
        )
    }
}

export default Header
