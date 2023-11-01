import React,{useEffect} from 'react'
import '../../styles/LandingPage.css'
import ButtonFillBorder from '../../components/ButtonFillBorder'
import ButtonFillInside from '../../components/ButtonFillInside'
import image1 from './partners/zen-kitchen.jpg'
import image2 from './partners/cafens.jpg'
import image3 from './partners/Vegan.jpg'
import image4 from './partners/Heavan-eats.jpg'
import image5 from './partners/leaf&ladle.jpg'
import image6 from './partners/cafee.jpg'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
    console.log(localStorage.getItem('type'))
    var user = localStorage.getItem('type')
    console.log(user)
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
          navigate('/home');
        }
        //console.log("Landing");
      })
    
    const navigateTo = (page) => {
        if (page == "home") {
            navigate('');
        } else {
            navigate('/' + page);
        }
    }
const carouselData = [
		{id: 1, image:image1},
		{id: 2, image:image2},
		{id: 3, image: image3},
		{id: 4, image: image4},
		{id: 5, image: image5},
		{id: 6, image: image6},
		
];
const settings = {
			dots: true,
			infinite: true,
			speed: 2000,
			slidesToShow: 3,
			autoplay: true,
			slidesToScroll: 1,
			arrows: false,
			autoplaySpeed: 3000,
			slidesToShow: 1,
};

    return (
			<div className='landingContainer'>
				<div className='header'>
					<div className='companyLogo'></div>
					<div className='signInsignUp'>
						<ButtonFillBorder color={'#08A045'} text={'Sign In'} function={navigateTo} link={'signin'} />
						<ButtonFillInside color={'#08A045'} text={'Sign Up'} function={navigateTo} textColor={'white'} link={'signup'} />
					</div>
				</div>
				<div className='bodyContainer'>
					<div className='landingLeft'>
						<div className='textLine'>
							Embrace the <span style={{color: '#08A045'}}>Green</span> revolution.
						</div>
						<div className='textLine'>Fuel Your Body with Vegan Goodness</div>
						<div className='textLine' style={{fontFamily: 'poppins-regular', fontSize: '22px', marginTop: '1%', color: '#A4A3A1'}}>
							Best cooks and best deliver guys as your service.Hot
						</div>
						<div className='textLine' style={{fontFamily: 'poppins-regular', fontSize: '22px', color: '#A4A3A1'}}>
							tasty food will rech you in 60 minutes.
						</div>
						<div className='textLine' style={{fontFamily: 'poppins-regular', fontSize: '32px', marginTop: '5%'}}>
							Our Partners
						</div>
						<div className='partners'>
                     <Slider {...settings}>
						{carouselData.map((data) => (
							<div className='partner' key={data.id}>
								<img className='image_partner' src={data.image} alt='partner' />

						</div>
						))}
						</Slider>
								 


						</div>
					</div>
					<div className='landingRight'>
						<div className='imageContainerOne'>
							<div className='imageContainerTwo'>
								<div className='image'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
