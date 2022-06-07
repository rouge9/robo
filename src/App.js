import React, {Component} from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBar from './Searchbar'
import './App.css';



class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField:''
        }
    }

    onSearchChange = (event)=> {
        this.setState({searchField: event.target.value})
    }

    render(){

        const filterdRobots = this.state.robots.filter(robots =>  {
        return (robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()))    
    
            })
    return(
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBar searchChange={this.onSearchChange}/>
            <CardList robots={filterdRobots}/>
        </div>
    )
}
}
export default App;