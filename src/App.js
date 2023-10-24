import About from './component/About/About';
import Header from './component/Header/Header';
import TodoApp from './component/TodoApp/TodoApp';
import React,{Component} from "react";
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<TodoApp/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
