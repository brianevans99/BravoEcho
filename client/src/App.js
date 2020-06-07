import React from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Home from './Pages/Home/Home'
// import Testimonials from './Pages/Testimonials/Testimonials'
import About from './Pages/About/About'
import Designs from './Pages/Designs/Designs'
import Marketing from './Pages/Marketing/Marketing'
import Pricing from './Pages/Pricing/Pricing'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  return (
    <Container fluid>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
          {/* <Route path='/testimonials' component={Testimonials} /> */}
          <Route path='/designs' component={Designs} />
          <Route path='/marketing' component={Marketing} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
