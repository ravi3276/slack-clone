import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Chat from './Chat';
import React,{useState, useEffect} from 'react'
import Login from './Login';
import {useStateValue} from './StateProvider';
function App() {

  // const [user,setUser]=useState(null);
    const [{user},dispatch] = useStateValue();
  return (
    <div className="app">

    <Router>
    {
      !user?(
        <Login />
      ):(
        <>
        <Header />
    
    <div className="app__body">
    <Sidebar />

    <Switch>

    <Route path="/room/:roomId">
    <Chat />
    </Route>

    <Route path="/">
    <h1>heloo/</h1>
    </Route>

    </Switch>
    </div>
        </>
      )
    }
    
    </Router>

     </div>
  );
}

export default App;