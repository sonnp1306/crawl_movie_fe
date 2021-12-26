import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
import { Switch, Route, Link, Router } from "react-router-dom";

import GetDataByUrl from './components/GetDataByUrl';

function App() {
  return (


    
    <div> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a href="/url" className="navbar-brand">
            Movie crawler
          </a>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              Get by url
            </li>
          </div>
        </div>
      </nav>
      
      <div className="container mt-3">
        <Switch>
          <Route exact path="/url" component={GetDataByUrl} />
          {/* <Route path="/upload" component={GetByFileUpload} />
          <Route path="/getAll" component={ShowMovies} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
