import React from 'react'
import Navbarbelt from './Navbarbelt/navbarbelt';
import Navbanner from './Navbanner/navbanner';

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <Navbarbelt/>
        <Navbanner/>
    </div>
  )
}

export default Navbar