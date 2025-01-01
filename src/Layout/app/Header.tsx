import { HedaerLinksArray } from '../../data/HeaderLinks'
import AnimationButton from '../../Components/Ui/AnimationButton';
import HeaderMenu from './HeaderMenu';
import { BaseURL_IMAGE } from '../../api/config';
import { THeaderPage } from '../../type/app';
import Spinner from '../../Components/Utils/Loading/Spinner';

const Header = ({data, isLoading}:THeaderPage) => {
  const Logo = data?.Static_info[5]
  
  return (
    <div className='header_container'>

        <div className='image_container'>

        {
         isLoading ? <Spinner/> :
          <img src={BaseURL_IMAGE + Logo?.value} alt='Misbar Logo' width={65}/>
        }
        </div>
        <div className='Header_links'>
          {
            isLoading ? <Spinner/> :
            HedaerLinksArray.map((link,index) => (
              <Link style={link.isOnlyDrawer ? {display:"none"}:{display:"flex"}} key={index} to={link.href} className='Link'><h4>{link.name}</h4></Link>
            ))
          }
        </div> 
        <div className="button_container">
          <AnimationButton link='/contact' text='Contact Us Now' icon={<FaTelegram/>}/>
        </div>

          <HeaderMenu data={data} isLoading={isLoading}/>
    </div>
  )
}

export default Header