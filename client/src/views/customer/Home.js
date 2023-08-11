import React, { useEffect, useState, useRef } from "react";
import Popup from "reactjs-popup";
import { useSelector, useDispatch } from "react-redux";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { addToCart,incrementCounter } from "../../constants/ActionTypes";

// import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { IncrementCounterAction } from "../../actions/IncrementCounterAction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as API_ENDPOINTS from "../../api/ApiEndpoints";
import "../../styles/Home.css";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";


function Home() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  //var userID = JSON.parse(atob(localStorage.getItem('token').split('.')))

  //console.log(localStorage.getItem('type'))
  //console.log(JSON.parse(atob(localStorage.getItem('token').split('.'))))
  const dispatch = useDispatch();
  const number = useSelector((state) => state.CounterReducer.counter);
  const [name, setName] = useState("");
  const val = useSelector((state) => state.ValueReducer.value);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [itemAdded, setItemAdded] = useState(false);
  var num = "";
  const navigateTo = (page) => {
	
			navigate('/' + page);
		
	};
  const [cart, setCart] = useState([]);


  const addToCartHandler = (product) => {
    dispatch(addToCart(product));

    closeModal();
    navigateTo("cart");
  };


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
  const [quantity, setQuantity] = useState(1);

const incrementQuantity = () => {
  setQuantity(quantity + 1);
};

const decrementQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};
  const fetchData1 = async () => {
    try {
      const res = await Axios.get("http://localhost:5001/api/restaurantGet");
      console.log(res.data);
      setFormData_1(res.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };
  useEffect(() => {
    fetchData1();

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
      const responsive1 = {
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
    
    return (
      <div className='home'>
      <div className='bottom_content'>
        {/* The rest of your home page content */}
        <div className='vision_1'>
          <p>Taste out :</p>
          <h3>Vegan Delight Near Me</h3>
        </div>

        {/* Food items */}
        <div>
          <Carousel className="carousel" responsive={responsive}>
            {formData.map((data1,) => (
              <div className='card' key={data1.productId}>
                {/* ...existing card content */}
                <p className='vegan_type'>{data1.veganType}</p>
                <img
                  className='product--image'
                  src={`http://localhost:5001/uploads/products/${data1.productImage}`}
                  alt={data1.productName}
                />
                <p className='product_name'>{data1.productName}</p>
                {data1.sell_products.map((sellProduct, index) => (
      <div key={index}>
        <p className='prices'>Price: Rs.{sellProduct.price}</p>
        <p className='prices'>Quantity: {sellProduct.quantity}</p>
      </div>
    ))}
                <button className='btn_cart_cus' onClick={() => toggleModal(data1)}>
                  View Product
                </button>
              </div>
            ))}
          </Carousel>

          {isModalOpen && (
            <div className='modal'>
              <div className='modal-content'>
                <button className='modal-close-btn' onClick={closeModal}>
                X
                </button>
                {selectedProduct && (
                  <div className='modal-product-details'>
                    <p>{selectedProduct.productName}</p>
                    <img
                      className='product--image1'
                      src={`http://localhost:5001/uploads/products/${selectedProduct.productImage}`}
                      alt={selectedProduct.productName}
                    />

                    {/* Render other product details here */}
                    <div className='modal-product-details'>
                    <p className='prices'>Description:{selectedProduct.description}</p>
                    <p className='prices'>Vegan Type:{selectedProduct.veganType}</p>
                    <p className='prices'>Category:{selectedProduct.category}</p>
                    {selectedProduct.sell_products.map((sellProduct, index) => (
                    <div key={index}>
                    <p className='prices'>Rs.{sellProduct.price}</p>
                    <p className='prices'>Quantity:{sellProduct.quantity}</p>
                    
                    </div>
                    
                ))}
                </div>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={decrementQuantity}>
                    <RiSubtractLine />
                  </button>
                  <span className="quantity">{quantity}</span>
                  
                  <button className="quantity-btn" onClick={incrementQuantity}>
                    <RiAddLine />
                  </button>            
          
                
                </div>
              
                    <div className='btn_cart_cus' onClick={()=>addToCartHandler({
                      productId: selectedProduct.productId,
                      productName: selectedProduct.productName,
                      productImage: selectedProduct.productImage,
                      price: selectedProduct.sell_products[0].price,
                      quantity: quantity,
            
                    })} >
                      Add to Cart
                    </div>
                
                  </div>
                )}
              </div>
            </div>
          )}
          </div>

          {/* Go to category */}
          <div className='seeMore' onClick={() => navigateTo('category')}>
            <p>
              See More
            </p>
          </div>
        

        {/* Restaurants */}
        <div className='vision_1'>
          <p>Taste out :</p>
          <h3>Vegan Delight Near Me</h3>
        </div>
        <div >
        
          <Carousel className="carousel" responsive={responsive1}>
            {formData_1.map((data) => (
              <div className='card' key={data.restaurantId}>
                <p className='vegan_type'>{data.veganType}</p>
                <img
                  className='product--image'
                  src={`http://localhost:5001/uploads/restaurants/${data.restaurantImage}`}
                  alt={data.restaurantName}
                />
                <p className='product_name'>{data.restaurantName}</p>
                <p className='prices'>Location</p>
                <button className='btn_res'>
                  View Restaurant
                </button>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='seeMore' onClick={() => navigateTo('restaurants')}>
            <p>
              See More
            </p>
          </div>
      </div>
    </div>
  );

  // return ( )
}

export default Home;
