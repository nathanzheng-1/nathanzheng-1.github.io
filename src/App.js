import './App.css';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './components/Projects/Projects';
import Internships from './components/Internships/Internships';
import Coursework from './components/Coursework/Coursework';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


const routes = [
  {
    path: "/home",
    exact: true,
    sidebar: <div>About Me</div>,
    page: () => <Home />

  },
  {
    path: "/projects",
    exact: true,
    sidebar: <div>Projects</div>,
    page: () => <Projects />

  },
  {
    path: "/experience",
    exact: true,
    sidebar: <div>Experience</div>,
    page: () => <Internships />

  },
  {
    path: "/coursework",
    exact: true,
    sidebar: <div>Coursework</div>,
    page: () => <Coursework />

  },


];

function App() {
  return (

    <Router>
      <Route render={({ location }) => (
        <div className='appRow'>
          <div >
            <Sidebar children={routes} />
          </div>
          <div className='main'>
            <Switch location={location}>
              {routes.map((route) => (
                <Route
                  exact path={route.path}
                  children={<route.page />}
                />
              ))}
              <Route path="/">
                <Redirect to="/home" />
              </Route></Switch>
          </div>

        </div>)} /></Router>

  );
}

export default App;
