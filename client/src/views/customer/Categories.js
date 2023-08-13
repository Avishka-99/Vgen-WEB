import React, {useState, useEffect} from 'react';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';
import Axios from '../../api/Axios';

export default function Categories() {
	////
	//image load

	const [formData, setFormData] = useState([]);

	// const fetchData=async ()=>{
	//   try{
	//     const res=await Axios.get(API_ENDPOINTS.productGet_URL,{
	//       headers:{
	//       "Content-Type":"application/json"
	//       }
	//     });
	//     console.log(res.data);
	//     setFormData(res.data);
	//   }catch(err){
	//     console.log('Error fetching data:', err);
	//   }
	// };
	// useEffect(()=>{
	//   fetchData();

	// },[]);
	//


	return (
		<div>

			<div>
				<h1>Card View</h1>
				<div className='card-container'>
					{formData.map((data) => (
						<div className='card' key={data.productId}>
							<div className='card-body'>
								<h5>{data.productName}</h5>
								<p>{data.description}</p>
								<p>{data.price}</p>
								<p>{data.quantity}</p>
								<img src={`http://localhost:5001/uploads/products/${data.productImage}`} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
