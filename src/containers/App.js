import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
// import { robots } from '../robots';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json()})
        .then(users => {this.setState({ robots:users })});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        });

        if (!robots.length) {
            return (
                <div className="tc">
                    <h1 style={{fontSize:'100px',margin:'0px'}}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <h1 className="tc" style={{ marginTop:'200px' }}>Loading...</h1> 
                </div>
            )
        } else {
            return (
                <div className="tc">
                    <h1 style={{fontSize:'100px',margin:'0px'}}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;