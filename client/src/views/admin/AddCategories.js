import React,{useEffect, useState} from 'react';
import "../../styles/Admin/Categories.css";
import Axios from '../../api/Axios';
import * as API_ENDPOINTS from '../../api/ApiEndpoints';

export default function Riders() {
	const [categories,setCategories] = useState();
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const currentDate = new Date();
	const dayOfWeek = daysOfWeek[currentDate.getDay()];
	const dayOfMonth = currentDate.getDate();
	const month = months[currentDate.getMonth()];
	const year = currentDate.getFullYear();
	const formattedDate = `${dayOfWeek} ${dayOfMonth.toString().padStart(2, '0')},  ${month} ${year}`;

	useEffect(()=>{
      Axios.post(API_ENDPOINTS.FETCH_ALL_CATEGORIES,{
    }).then((response)=>{
	  console.log(response.data)
	  setCategories(response.data)
	  //cons
    })
	},[])
	   const showFoods = (id)=>{
	   console.log(id)
	}
	const filterArrayByCategory = (item,option)=>{
		if(item.vegan_category ==option){
			return item;
		}

	}
	const fetchAllFoods = (name)=>{
		Axios.post('/api/getallproducts').then((response)=>{
			const newFoods = response.data.filter((item)=>filterArrayByCategory(item,name))
			console.log(newFoods)
		})
	}
	return (
	  <div className="Cat-Container">
		<div className="Cat-Top">
		  <div className="Cat-TopLeft">
			<div className="Cat-TopLine">
			  <div className="Cat-HeadingText">VGen Categories</div>
			  <div className="Cat-NotificationButton"></div>
			</div>
			<div>
			  <div className="Cat-DateText">{formattedDate}</div>
			</div>
			<br />
			<div>
			   <div className="Cat-SubHeadingText">Manage Categories</div>
			   <div className="Cat-SelectedCategory">Desserts</div>
			</div>
			<div className="Cat-SubContainer">
                <div className="Cat-LeftContainer">
				{categories && categories.map((item)=>(
					<div className="Cat-CardContainer" key={item.id}>
                  <div className="Cat-FirstDivider" onClick={()=>showFoods(item.name)}>
                    <div className="Cat-CardIconContainer2">
						<img src={`http://localhost:5001/uploads/thumbnails/${item.image}`} style={{width:'90px',height:'90px'}}/>
					</div>
                    <div className="Cat-BodyText">{item.name}</div>
                  </div>
                </div>
				))}
				
				{/* <div className="Cat-CardIconContainer-row">
				<div class="square-input">
                    <input type="file" id="fileInput" accept="image/*" />
                   <label for="fileInput">Add New Item</label>
                </div>
				<div className="Cat-SecondDivider"></div>
				<div className="Cat-CardContainer">
                  <div className="Cat-FirstDivider">
                    <div className="Cat-CardIconContainer"></div>
                    <div className="Cat-BodyText">Vegan Cheese Cake</div>
                  </div>
                </div>
				<div className="Cat-SecondDivider"></div>
				<div className="Cat-CardContainer">
                  <div className="Cat-FirstDivider">
                    <div className="Cat-CardIconContainer2"></div>
                    <div className="Cat-BodyText">Chocolate Pudding</div>
                  </div>
                </div>
				<div className="Cat-SecondDivider"></div>
				<div className="Cat-CardContainer">
                  <div className="Cat-FirstDivider">
                    <div className="Cat-CardIconContainer3"></div>
                    <div className="Cat-BodyText">Apple Pie</div>
                  </div>
                </div>
				</div>
				<div className="Cat-CardIconContainer-row">
				<div className="Cat-CardContainer">
                  <div className="Cat-FirstDivider">
                    <div className="Cat-CardIconContainer4"></div>
                    <div className="Cat-BodyText">Blueberry Crisp</div>
                  </div>
                </div>
				<div className="Cat-SecondDivider"></div>
				<div className="Cat-CardContainer">
                  <div className="Cat-FirstDivider">
                    <div className="Cat-CardIconContainer5"></div>
                    <div className="Cat-BodyText">Melon Pops</div>
                  </div>
                </div>
				<div className="Cat-SecondDivider"></div>
				<div className="Cat-CardContainer">
                  <div className="Cat-FirstDivider">
                    <div className="Cat-CardIconContainer6"></div>
                    <div className="Cat-BodyText">Chocolate Truffles</div>
                  </div>
                </div>
				<div className="Cat-SecondDivider"></div>
				<div className="Cat-CardContainer">
                  <div className="Cat-FirstDivider">
                    <div className="Cat-CardIconContainer7"></div>
                    <div className="Cat-BodyText">Berry Sorbet</div>
                  </div>
                </div>
				</div> */}
				</div>
			</div>
			<div className="Cat-SubContainer">
			</div>
		  </div>
		  <div className="Cat-Right">
			<div className="Cat-SubHeadingText">
			  Select Category
			  <div className="Cat-FilterButton1">Filter</div>
			</div>
			<div>
			  <div className="Cat-RightContainer">
			   {categories && categories.map((item) => (
              <div className="Cat-Activities" key={item.id} onClick={()=>fetchAllFoods(item.name)}>
                <div className="Cat-ActivityIconContainer">
	          <img src={`http://localhost:5001/uploads/thumbnails/${item.image}`} style={{width:'35px',height:'35px'}}/>
             </div>
             <div className="Cat-ActivityText">{item.name}</div>
            </div>
             ))}
			   {/* <div className="Cat-Divider"></div>
               <div className="Cat-Activities">
                  <div className="Cat-ActivityIconContainer"></div>
                  <div className="Cat-ActivityText">Spaghetti and Tofu Salad</div>
               </div>
			   <div className="Cat-Divider"></div>
			   <div className="Cat-Activities">
                  <div className="Cat-ActivityIconContainer"></div>
                  <div className="Cat-ActivityText">Spaghetti and Tofu Salad</div>
               </div>
			   <div className="Cat-Divider"></div>
			   <div className="Cat-Activities">
                  <div className="Cat-ActivityIconContainer"></div>
                  <div className="Cat-ActivityText">Spaghetti and Tofu Salad</div>
               </div>
			   <div className="Cat-Divider"></div>
			   <div className="Cat-Activities">
                  <div className="Cat-ActivityIconContainer"></div>
                  <div className="Cat-ActivityText">Spaghetti and Tofu Salad</div>
               </div>
			   <div className="Cat-Divider"></div>
			   <div className="Cat-Activities">
                  <div className="Cat-ActivityIconContainer"></div>
                  <div className="Cat-ActivityText">Spaghetti and Tofu Salad</div>
               </div>
			   <div className="Cat-Divider"></div>
			   <div className="Cat-Activities">
                  <div className="Cat-ActivityIconContainer"></div>
                  <div className="Cat-ActivityText">Spaghetti and Tofu Salad</div>
               </div>
			   <div className="Cat-Divider"></div>
			   <div className="Cat-Activities">
                  <div className="Cat-ActivityIconContainer"></div>
                  <div className="Cat-ActivityText">Spaghetti and Tofu Salad</div>
               </div>
			   <div className="Cat-Divider"></div> */}
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
}
