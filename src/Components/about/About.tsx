import AnimationButton from '../Ui/AnimationButton';
import CustomTitle from '../Ui/CustomTitle'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import HeaderLink from '../Ui/HeaderLink';
import Spinner from '../Utils/Loading/Spinner';
import { THeaderPage } from '../../type/app';

const About = ({isHaveHeader = false, data,isLoading}:THeaderPage) => {

    const {t} = useTranslation();
    const aboutData = data?.Static_info[0]
    
  return (
    <div className='about' id='about'>
        <picture>
          <source className="about_image" srcSet="/App/WhiteBgRes.png" media="(max-width: 600px)" />
          <img className="about_image" src="/App/WhiteBg.png" alt="MDN" />
        </picture>
        <div className='main_container'>
            {
                isHaveHeader ?  <HeaderLink text='About' /> : ""
            }
            <div className="about_container">
                <div className="about_left">
                    <img src="/Home/about_left_image.png" alt="" />
                </div>

                <div className="about_right">
                    <CustomTitle title={"Our Story"}/>
                    <h1>{t(isLoading ? <Spinner/> :aboutData?.key)}</h1>
                    <p>{t("We are specialists in financial planning and reporting.")}</p>
                    <p>{isLoading ? <Spinner/> :aboutData?.value}</p>
                    <div className='button_container'>
                        <AnimationButton link='/about' icon={<IoIosArrowDroprightCircle/>} text="Learn More Now" />
                    </div>
                </div>    
            </div>       
        </div> 
    </div>
  )
}

export default About