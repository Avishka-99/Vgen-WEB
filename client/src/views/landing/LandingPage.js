import React,{useEffect} from 'react'
import '../../styles/LandingPage.css'
import ButtonFillBorder from '../../components/ButtonFillBorder'
import ButtonFillInside from '../../components/ButtonFillInside'
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
						<div className='partners'></div>
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
