import React from 'react'
import {Switch, Route, Link } from 'react-router-dom'


import {Home, Exchanges, Details, Currencies, Navbar, News} from './components'

const App = () => {
  return (
    <div className='w-full '>

        <Navbar />
        <div>
        <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/news">
                  <News />
                </Route>

                <Route exact path="/currencies">
                  <Currencies/>
                </Route>

                <Route exact path="/crypto/:coinId">
                  <Details/>
               </Route>
          </Switch>
        </div>
     
    </div>
  )
}

export default App