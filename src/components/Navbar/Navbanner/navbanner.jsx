import React from 'react'
import './navbanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
const Navbanner = () => {
    const options=[
        { "name": "Fresh" },
    { "name": "Amazon miniT" },
    { "name": "Sell" },
    { "name": "Best Sellers" },
    { "name": "Today's Deals" },
     { "name": "Mobiles" },
      { "name": "Electronics" }, { "name": "Prime" }, { "name": "Customer Service" }, { "name": "Fashion" }, { "name": "Home & Kitchen" }
    ]
  return (
    <div className = "banner">
        <div className="leftbanner">
            <div className="optionnavbanner">
                <MenuIcon sx = {{ fontSize: "24px"}}/>
                <div className="allop">All</div>
            </div>
            {
                options.map((item, ind)=>{
                    return(
                        <Link to = {'/product'}className="optionnavbanner" key ={ind}>
                            <div className="allop">{item.name}</div>
                        </Link>
                    );
                })
            }
        
        </div>
    </div>
  )
}

export default Navbanner