import React,{Component} from 'react'
import './App.css'
// import CardInfo from './Components/CardInfo'
import FlashCard from './Components/FlashCard'
import Home from './Components/Home'
// import FlashCard from './Components/FlashCard'
// import Buttons from './Components/Buttons'

class App extends Component{



  render(){
    return(
      <div className="App">
        <Home/>
        <FlashCard/>
      </div>
    )
  }
}

export default App;
