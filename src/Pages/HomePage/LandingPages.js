import React from 'react'
import LandingPage from '../../Components/HomePageComponents/LandingPage'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Headers/Header'

export default function LandingPages(props) {
  return (
    <div>
        <Header history={props.history}></Header>
        <LandingPage history={props.history}></LandingPage>
        <Footer history={props.history}></Footer>
    </div>
  )
}
