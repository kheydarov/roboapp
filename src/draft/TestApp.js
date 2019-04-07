import React, { Component } from 'react';
import TestList from './TestList';
import { robots } from './robots';
import TestSearch from './TestSearch';


class TestApp extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
            this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <TestSearch searchChange = {this.onSearchChange}/>
                <TestList robots={filteredRobots}/>
            </div>
        );
    }
} 

export default TestApp;