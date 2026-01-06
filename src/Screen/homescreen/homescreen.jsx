import React from 'react'
import './homescreen.css'
import Homebanner from './homebanner/homebanner'
import HomeDetails from './homedetails/homedetails'
import Footer from '../../components/Footer/footer'
const Homescreen = () => {
  return (
    <div className="homescreen">
        <Homebanner/>
        <HomeDetails/>
        
    </div>
  )
}

export default Homescreen