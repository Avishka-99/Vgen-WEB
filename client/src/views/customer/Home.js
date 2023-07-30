import React, { useEffect, useState, useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
// import Button from '../../components/Button';
import Axios from "axios";
import { IncrementCounterAction } from "../../actions/IncrementCounterAction";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import * as API_ENDPOINTS from "../../api/ApiEndpoints";
import "../../styles/Home.css";

function Home() {
  const [modal, setModal] = useState(false);

  //var userID = JSON.parse(atob(localStorage.getItem('token').split('.')))

  //console.log(localStorage.getItem('type'))
  //console.log(JSON.parse(atob(localStorage.getItem('token').split('.'))))
  const dispatch = useDispatch();
  const number = useSelector((state) => state.CounterReducer.counter);
  const [name, setName] = useState("");
  const val = useSelector((state) => state.ValueReducer.value);
  const modalRef = useRef(null);

  var num = "";

  // const increaseCounter = () => {
  //     Axios.post("http://localhost:5001/api/registeruser", {
  //         email: "Dasith",
  //         password: "534rdsd",
  //     }).then((response) => {
  //         Axios.get("http://localhost:5001/api/data").then((response) => {
  //             console.log(response.data[0].id);
  //             dispatch(IncrementCounterAction(parseInt(response.data[0].id)));
  //         });
  //     });
  //     //const data = Axios

    // };
    const [formData,setFormData]=useState([])
    const [formData_1,setFormData_1]=useState([])

  const fetchData = async () => {
    try {
      const res = await Axios.get("http://localhost:5001/api/productGet");
      console.log(res.data);
      setFormData(res.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };
  useEffect(() => {
    fetchData();

  },[]);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
       const toggleModal = () => {
        setModal(!modal);
      };
    return (
      <div className='home'>
    
      
     
     

      {/* The rest of your home page content */}
      <div className="bottom_content" />
      <div className="vision_1">
        <p>Taste out :</p>
        <h3>Vegan Delight Near Me</h3>
      </div>
  {/* Food items */}
      <div>
        <Carousel responsive={responsive}>
          {formData.map((data,addToCart) => (
            <Popup trigger={
            <div className='card' key={data.productId}>
              <p className='vegan_type'>{data.veganType}</p>
              <img className='product--image' src={`http://localhost:5001/uploads/products/${data.productImage}`} alt={data.productName} />
              <p className='product_name'>{data.productName}</p>
              <p className='prices'>Rs. {data.price}</p>
              <button className='btn_cart' onClick={toggleModal}>
                View Item
              </button>
            </div> } modal nested>
{
  close =>(
    <div className="modal">
   
      <div className='image_div1'>
      <img className='product--image_1' src={`http://localhost:5001/uploads/products/${data.productImage}`} alt={data.productName} />
      </div>
      <div className='details_div'>
        <div className='close_div'>
        <button className="close" onClick={close}>
        &times;
      </button>
        </div>
   
      <div className="header_product"> {data.productName}</div>
      <p className='prices'>Rs. {data.price}</p>
      <div className="content_product">
        {data.description}  
        </div>
        <div className='quantity_add'>
          <button><RiAddLine/></button>
          <button><RiSubtractLine/></button> 
          </div>
         
          <button className='add_cart'onClick={()=>addToCart(data)} >Add to Cart</button>
   </div>
   
   </div>
  )
}
              </Popup>
          ))}
       
        </Carousel>
      </div>
    </div>
  );

  // return ( )
}

export default Home;
