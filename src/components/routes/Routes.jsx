import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Certificates from '../certificates/Certificates'
import Home from '../home/Home'
import BackEnd from '../main/BackEnd'
import Main from '../main/Main'

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/front-end" component={ Main } />
        <Route exact path="/certificates" component={ Certificates } />
        <Route path="/back-end" component={ BackEnd } />
      </Switch>
    </div>
  )
}
