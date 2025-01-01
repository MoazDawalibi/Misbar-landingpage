import React from 'react'
import CustomTitle from '../Ui/CustomTitle'
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import AnimationButton from '../Ui/AnimationButton';
import { BaseURL_IMAGE } from '../../api/config';

interface ContactOneSectionProps {
    title:string,
    text:string,
    subText:string,
    bottomText:string,
    isHaveButton:boolean,
    rowRevers:boolean,
    image:string
} 
const ContactOneSection = ({title,text,subText,bottomText,isHaveButton,rowRevers,image}:ContactOneSectionProps) => {
    const {t} = useTranslation(); 
  return (
    <div className="contact_section" style={rowRevers?{flexDirection:"row-reverse"}:{flexDirection:"row"}}>
        <div className='image_container'>
            <img src={BaseURL_IMAGE + image} alt="contact_image" />
        </div>
        <div className='right'>
            <CustomTitle title={title}/>
            <h1>{t(text)}<span> { t(subText)}</span></h1>
            <p>{t(bottomText)}</p>
            {isHaveButton ? 
            <div className='button_container'>
                <AnimationButton link='/contact' icon={<IoIosArrowDroprightCircle/>} text="Contact Us Now" />
            </div>
            :""
            }
        </div>

    </div>
  )
}

export default ContactOneSection