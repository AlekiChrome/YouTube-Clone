import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Homer from "./components/Homer";
import VideoPlayer from "./components/VideoPlayer";


function App() {
  return (
    <div className="App">
          <div>
          <Header />
          </div>
          <Switch>
            <Route exact path = "/" component={Homer}/>
            <Route path= "/About" component={About} />
            <Route path= "/video/:id" component={VideoPlayer}/>
          </Switch>
          </div>
  )
}

export default App;
