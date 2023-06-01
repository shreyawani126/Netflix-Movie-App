import React from 'react'
import "./home.scss"
import Navbar from '../../components/Navbar'
import Featured from '../../components/Featured'
import List from '../../components/List/List'


const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <Featured/> 
    <List/>
    <List/>
    <List/>
    
    
    </div>
  )
}

export default Home


