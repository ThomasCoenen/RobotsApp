import React, { Component } from 'react';
// import CardList from '../components/CardList'; //use '..' when u are leaving a folder
import CardList from './CardList';
// import SearchBox from '../components/SearchBox';
import SearchBox from './SearchBox';
// import Scroll from '../components/Scroll';
import Scroll from './Scroll';
import './App.css';
// import { robots } from './robots'; //since this isnt default must destructure. No longer Need since using the API

//to use STATE must go back to the original way we created react Components ->
//done by creating a CLASS Comp
class App extends Component {
  //ADD STATE -> must use a CONSTRUCTOR funct. Declare the STATE in the constructor funct
  //Now we have our STATE. STATE is what descirbes our App and are the things that can CHANGE
  //that can affect our app. STATE usually lives in the PARENT COMP and passes STATE down to
  //diffenent components 
  constructor() {
    super()
    //add STATE in our App (description of what our state should be)
    this.state = {
      robots: [],   //state need to have robots arr
      searchfield: ''  //searchfield is an empty str
    }
  }

  //use to get Data from an API
  componentDidMount() {
    //Fetch the users-makes an HTTP request to a server. 
    //Fetch recieves a Response.
    //FETCH is a method on the WINDOW obj. Thats why it doesn't have
    //anything attached to it (id a .)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json()) //convert the response to JSON
      .then(users => this.setState({ robots: users })) //now we're getting users back. Update them
  }

  //Make a funct for Searching stuff for the Input. MUST USE ARROW FUNCT syntax when
  //we make our OWN methods 
  //everytime INPUT changes we get an EVENT (like in DOM manipulation)
  onSearchChange = (event) => {
    // console.log(event)  // gives us the entire event
    // console.log(event.target.value) //gives us the value of the event
    //Update the Seachfield bc its set to an empty str originally. Anytime u change change
    //state u use this method
    this.setState({ searchfield: event.target.value }) //searchfield always gets updated now
    // console.log(filteredRobots)
  }

  render() {
    //Destructuring- we say this.state a lot
    const { robots, searchfield } = this.state;
    //Robots is an Array
    const filteredRobots = robots.filter(robot => {
      //lowercase the name. If name of robots includes the SeachField(in lowercase so it 
      //works both ways). Returns Robots that turn True to this
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
    })

    //What if componentDidMount() took a long time to load and we have a 
    //whole bunch of users?-> take care of this in the Render Method 
    //b4 Return
    //could also say:
    // if (!robots.length)  -> automatically means 0. 0==false in JS
    if (robots.length === 0) {
      return <h1>Loading</h1>  //add loading bar in case takes long
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          {/* //searchChange is a PROP */}
          <SearchBox searchChange={this.onSearchChange}/>  
          <Scroll>
            <CardList robots={filteredRobots}/>  
          </Scroll>
        </div>
      )
    }
  }
}

export default App;


//Now that the Parent has the value of the SEARCH Input we can directly communicate the 
//Search Inputs Value to the CardList comp

