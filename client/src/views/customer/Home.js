import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../components/Button';
import Axios from 'axios';
import { IncrementCounterAction } from '../../actions/IncrementCounterAction';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as API_ENDPOINTS from '../../api/ApiEndpoints'

import '../../styles/Home.css';

export default function Home() {
    const dispatch = useDispatch();
    const number = useSelector(state => state.CounterReducer.counter);
    const [name, setName] = useState('');
    const val = useSelector(state => state.ValueReducer.value)
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

  const fetchData=async ()=>{
    try{
      const res=await Axios.get("http://localhost:5001/api/productGet",{
        headers:{
        "Content-Type":"application/json"
        }
      });
      console.log(res.data);
      setFormData(res.data);
    }catch(err){
      console.log('Error fetching data:', err);
    }
  };
  useEffect(()=>{
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
    /*useEffect(() => {
        console.log("hello")
        /*Axios.get("http://localhost:5001/api/data").then((response) => {
            //num = response.name;
            //console.log((response.data[0].name));
            setName(response.data[0].name);
        });
    })*/
    return (
        <div className='home'>
<div className='bottom_content'></div>
<div className='vision_1'><p>Teste out :)</p>
     <h3>Vegan Delight Near Me</h3></div>
<Carousel responsive={responsive}>
   
{formData.map((data) => (
  <div className='card' key={data.productId}>
             <h5 >{data.productName}</h5>
              <p >{data.description}</p>
              <p >{data.price}</p>
              <p>{data.quantity}</p>
              <img className='product--image' src={`http://localhost:5001/uploads/products/${data.productImage}`} />
    <button>Add Cart</button>
    </div>
))}
 
</Carousel>
</div>
  
    )
}
