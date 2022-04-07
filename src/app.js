import React from 'react'
import {Switch, Route, Link } from 'react-router-dom'

import {Home,Exchanges, Currencies, Navbar, News} from './components'

const App = () => {
  return (
    <div className='w-full h-screen'>

        <Navbar />
        <div>
        <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>

                <Route exact path="/news">
                  <News />
                </Route>

                <Route exact path="/currencies">
                  <Currencies/>
                </Route>
          </Switch>
        </div>
        
    
    </div>
  )
}

export default App