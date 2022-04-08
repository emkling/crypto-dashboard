import React from 'react'
import {Switch, Route, Link } from 'react-router-dom'


import {Home, Exchanges, Details, Currencies, Navbar, News} from './components'

const App = () => {
  return (
    <div className='w-full bg-[#dcdcdc]'>

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

                <Route exact path="/crypto/:coinId">
                  <Details/>
               </Route>
          </Switch>
        </div>
        <div className='h-[80px] w-full bottom-0 bg-[#000034] flex justify-center items-center text-[#FFFFFF] bg-gradient-welcome'>
          <p> All Rights Reserved </p>
        </div>

    </div>
  )
}

export default App