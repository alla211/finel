import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navigation from "../components/Navigation"
import Home from "../components/App"
import Currency from "../components/Currency"
import Converter from "../components/Converter"
import NotFound from "../components/NotFound"
import SearchResult from "../components/SearchResult"
import Footer from "../components/Footer"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/converter" component={Converter}/>
          <Route path="/searchresult/:id" component={SearchResult}/>
          <Route path="/:id" component={Currency}/>
          <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}