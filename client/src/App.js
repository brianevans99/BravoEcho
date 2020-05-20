import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Designs from './Pages/Designs/Designs'
import Marketing from './Pages/Marketing/Marketing'
import Pricing from './Pages/Pricing/Pricing'
import NotFound from './Pages/NotFound/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/designs' component={Designs} />
          <Route path='/marketing' component={Marketing} />
          <Route path='/pricing' component={Pricing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
