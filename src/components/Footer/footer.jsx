import React from 'react'
import "./footer.css";
import amazonlogo from '../../assets/images/amazonLogo.png';
const Footer = () => {
  return (
    <div className= "footer">
        <div className="footercontent">
            <div className="footcont">
                <div className="conttitle">Get To Know Us</div>
                <div className="contfootsubtitle">
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Release</p>
                    <p>Amazon Science</p>
                </div>
            </div>
            <div className="footcont">
                <div className="conttitle">Connect With Us</div>
                <div className="contfootsubtitle">
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    {/* <p>Amazon Science</p> */}
                </div>
            </div>
            <div className="footcont">
                <div className="conttitle">Make Money WIth Us</div>
                <div className="contfootsubtitle">
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protct and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an affiliate</p>
                    <p>Fulfillment by Amazon</p>
                </div>
            </div>
            <div className="footcont">
                <div className="conttitle">Let Us Help You</div>
                <div className="contfootsubtitle">
                    <p>Covid-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    {/* <p>Amazon Science</p> */}
                </div>
            </div>

        </div>
        <div className="amazonimage">
            <img className = "amazonlogofoot" src = {amazonlogo}/>
        </div>
    </div>

  )
}

export default Footer