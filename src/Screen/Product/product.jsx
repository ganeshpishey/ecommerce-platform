import React from 'react'
import './product.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import productdetail from './product.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart=(item)=>{

        toast.success("Added To Cart", {
            position:"bottom-right"
          })
          
        dispatch(addToCart(item));
    }
  return (
    <div className= "productpage">
        <div className="producttopbanner">
            <div className="producttopbanneritems">
                Electronics
            </div>
            <div className="producttopbanneritemsubmenu">Mobiles & Accessories</div>
            <div className="producttopbanneritemsubmenu">Laptop & Accessories</div>
            <div className="producttopbanneritemsubmenu">TV & Home Entertainment</div>
            <div className="producttopbanneritemsubmenu">Audio</div>
            <div className="producttopbanneritemsubmenu">Cameras</div>
            <div className="producttopbanneritemsubmenu">Computer Peripherals</div>
            <div className="producttopbanneritemsubmenu">Smart Technology</div>
            <div className="producttopbanneritemsubmenu">Musical Instrument</div>
            <div className="producttopbanneritemsubmenu">Office & Stationary</div>
        </div>

        <div className="productpagemain">
            <div className="productpagemainleft">
                <div className="ppmltitle">Category</div>
                <div className="ppmlcontent">
                    <div className="ppmltitlecontent">Computers & Accessories</div>
                    <div className="ppmlcontentsub">Macbooks</div>
                    <div className="ppmlcontentsub">Average Customer Review</div>

                    <div className="ratingleftBox">
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarBorderIcon sx = {{fontSize: "20px", color: "#febd69"}}/>                    
                        <div className="andUp">& Up</div>
                    </div>
                    <div className="ratingleftBox">
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarBorderIcon sx = {{fontSize: "20px", color: "#febd69"}}/>                    
                        <div className="andUp">& Up</div>
                    </div>
                    <div className="ratingleftBox">
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarBorderIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarBorderIcon sx = {{fontSize: "20px", color: "#febd69"}}/>                    
                        <div className="andUp">& Up</div>
                    </div>
                    <div className="ratingleftBox">
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        <StarBorderIcon sx = {{fontSize: "20px", color: "#febd69"}}/>                    
                        <div className="andUp">& Up</div>
                    </div>
                    <div className="ppmlcontentsub">Amazon Prime</div>
                    <div className="ppmlcontentsub">Average Customer Review</div>
                    
                    <div className="ppmlcontentsub">Amazon Prime</div>
                    <div className="ppmlcontentsub">Average Customer Review</div>

                    <div className="ppmlcontentsub">Amazon Prime</div>
                    <div className="ppmlcontentsub">Average Customer Review</div>

                    <div className="ppmlcontentsub">Amazon Prime</div>
                    <div className="ppmlcontentsub">Average Customer Review</div>

                    <div className="ppmlcontentsub">Amazon Prime</div>
                    <div className="ppmlcontentsub">Average Customer Review</div>
                </div>
            </div>
            <div className="productpagemainright">
                <div className="productpagemainrighttopbanner">
                    1-5 of 5 results for <span className = 'productpagemainrighttopbannerspan'>Macbook</span>
                </div>
                <div className="itemsimageproductpage">
                    {
                        productdetail.product.map((item, index)=>{
                            return(
                                <div className="itemsimageproductpageone" key = {item.id}>
                        <div className="imgblockitemsimgprodpageone">
                            <img src={item.imageUrl} className = 'productimageproduct'/>
                        </div>
                        <div className="productnameproduct">
                            <div>{item.name}</div>
                        </div>
                        <div className="productrating">
                            <StarIcon sx = {{fontSize: "16px", color: "#febd69"}}/>
                            <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                            <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                            <StarIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                            <StarBorderIcon sx = {{fontSize: "20px", color: "#febd69"}}/>
                        </div>
                        <div className="priceproductpage">
                            <div className="currencytext">₹</div>
                            <div className="ratehomedetail">
                                <div className="ratehomedetailprice">{item.price}</div>
                                <div className="addtocartbutton" onClick ={() =>{handleAddToCart(item)}}>Add to Cart</div>
                            </div>
                                
                        </div>
                        <div className="offproductpage">Upto 10% off on select cards</div>
                        <div className="freeddeliveyhomepage">Free Delivery by Amazon</div>
                    </div>
                            );
                        })
                    }
      
                    
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Product