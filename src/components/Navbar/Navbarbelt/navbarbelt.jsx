import React from 'react';
import './navbarbelt.css';
import amazonLogo from '../../../assets/images/amazonLogo.png';
import indialogo from '../../../assets/images/india.png';
import  LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

const Navbarbelt = () => {
  const cartItems = useSelector  ((state) =>  state.cart.items);
  return (
    <div className = 'navbarbelt'>
        <div className="leftnavbelt">
            <Link to= {'/'}className="leftlogo">
                <img className = "amazonlogo" src = {amazonLogo} alt ="amazonLogo"/>
                <span className = 'navbar_inlogo'>.in</span>
            </Link>
            <div className="navbeltlocation">
                <div className="navbeltlocimage">
                    <LocationOnIcon className="navbeltlocimage" sx = {{fontSize: "25px"}}/>
                </div>
                <div className="navbeltlocplace">
                    <div className="navbeltlocplacetop">Delivering to Bangalore 560042</div>
                    <div className="navbeltlocplacebottom">Update location</div>
                </div>
            </div>
        </div>
        <div className="navbeltsearchbox">
            <div className="navbeltsearchboxdiv">
                <div className="navbeltsearchall">
                    <div className="navbeltsearchalltext">All</div>
                    <ArrowDropDownIcon sx ={{fontSize: "20px"}}/>
                </div>
                <input type = 'text' className="navbeltinputsearchbox" placeholder= "Search Amazon"/>

                <div className="navbeltsearchicons">
                    <SearchIcon sx = {{fontSize: "26px"}} className = 'navbeltsearchiconicon'/>
                </div>
            </div>
        </div>
        <div className="rightnavbelt">
            <div className="indiaflag">
                <img src = {indialogo} className="indiaflag"/>
                <div className="indiacodenavbelt">EN<ArrowDropDownIcon sx = {{fontSize:16, marginTop:1, marginLeft:-0.4}} className = "indiacodenavbeltdrp"/></div>
            </div>
            <div className="hellosignnavbelt">
                <div className="hellotopnavbelt">Hello, User</div>
                <div className="indiacodenavbelt">Accounts & List</div>
            </div>
            <div className="hellosignnavbelt">
                <div className="hellotopnavbelt">Returns</div>
                <div className="indiacodenavbelt">& Orders</div>
            </div>
            <Link to ={"/cart"} className="hellosignnavbelt">
                <span className="cartitemnumnavbelt">{cartItems.length}</span>
                <div className="hellotopnavbelt"><ShoppingCartIcon/><span className = 'carttitle'>Cart</span></div>

            </Link>
        </div>
    </div>
  )
}

export default Navbarbelt