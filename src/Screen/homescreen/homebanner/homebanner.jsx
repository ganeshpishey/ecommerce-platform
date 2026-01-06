import React from 'react'
import './homebanner.css';
import homebanneritemproduct from '../../../homeproduct.json'
const Homebanner = () => {
  return (
    <div className= "homebanner">
        <img className = "homebannerimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img25/Nimesh/Jupiter25_PC_Phase_2b_8pm_2x._CB798942768_.jpg"/>
        <div className="graybgbanner"></div>
        
        <div className="homebanneritemdiv">
            {
                homebanneritemproduct.product.map((item, ind) => {
                    return(
                        <div className="homebanneritemdivcard">
                            <div className="homebanneritemdivcardtitle">{item.itemTitle}</div>
                            <div className="imghomebanneritemdivcard">
                                {
                                    item.imgs.map((it, ind)=>{
                                        return(
                                            <div className="imghomebannerdiv">
                                                <img className= "imgbannerhomedivimg" src={it}/>
                                                <div className="imgbaneerimgname">Jeans under 799</div>
                                            </div>
                                        );
                                 })
                                }
                    
                </div>
                <div className="seemorebutton">See More</div>
            </div>
                    );
                })
            }
            
        </div>
    </div>
  )
}

export default Homebanner