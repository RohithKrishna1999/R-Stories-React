import React from 'react'
import AddStories from '../../Components/AddStories/AddStories'
import Header from '../../Components/Headers/Header'
import Footer from '../../Components/Footer/Footer'

export default function AddStoriesPage(props) {
  return (
    <div>
        <Header history={props.history}></Header>
        <AddStories  history={props.history}></AddStories>
        <Footer history={props.history}></Footer>
    </div>
  )
}
