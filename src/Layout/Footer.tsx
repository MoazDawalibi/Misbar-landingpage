import MediaButton from '../Components/Ui/MediaButton';
import SingleLink from '../Components/Ui/SingleLink';
import { HomelinksArray, QuicklinksArray, ServicelinksArray } from '../data/Links';
import FooterTItleWithSeparator from '../Components/Ui/FooterTItleWithSeperator';
import ContactInfo from '../Components/Ui/ContactInfo';
import { BaseURL_IMAGE } from '../api/config';
import { THeaderPage } from '../type/app';
import Spinner from '../Components/Utils/Loading/Spinner';

const Footer = ({data, isLoading}:THeaderPage) => {
    const { t } = useTranslation();
    const mediaArray = data?.Social_media
    const contactNumber = data?.Static_info[3]
    const contactEmail = data?.Static_info[4] 
    const Logo = data?.Static_info[5]
    if (isLoading){
        return <Spinner/>
    }
    return (
        <div className='footer_contianer'>
                <img className='footer_image' src="/Layout/FooterImage.png" alt="footer_image" />
            <div className='Footer'>
                <div className='logo_section'>
                    <img src={BaseURL_IMAGE + Logo?.value} width={100} />
                    <p>{t("We implement the corporate performance software for consolidation, planning and reporting porspises.")}</p>
                    <FooterTItleWithSeparator title="Follow Us :"/> 
                    <div className='media_container'>
                    {mediaArray?.map((media: { id: number; image: string; link:string}) => (
                        <MediaButton key={media?.id} img={media?.image} link={media?.link} />
                    ))}
                    </div>
                </div>

                <div className='home_links_section'>
                    <FooterTItleWithSeparator title="Home"/> 
                    <div className="links_container">
                        {HomelinksArray.map((link, index) => (
                            <SingleLink key={index} href={link.href} name={link.name} />
                        ))}
                    </div>
                </div>

                <div className='service_links_section'>
                    <FooterTItleWithSeparator title="Service"/> 
                    <div className="links_container">
                        {ServicelinksArray.map((link, index) => (
                            <SingleLink key={index} href={link.href} name={link.name} />
                        ))}
                    </div>
                </div>

                <div className='quick_links_section'>
                    <FooterTItleWithSeparator title="Quick Links"/> 
                    <div className="links_container">
                        {QuicklinksArray.map((link, index) => (
                            <SingleLink key={index} href={link.href} name={link.name} />
                        ))}
                    </div>
                </div>

                <div className='contact_links_section'>
                    <FooterTItleWithSeparator title="Contact Us"/> 
                    <div className='media_container_info'>
                        
                        <div className='single_contact_info'>
                            <MediaButton isStatic={true} img={MdLocalPhone}/>
                            <ContactInfo 
                                title={contactNumber?.key}
                                info={contactNumber?.value}/>
                        </div>
                        <div className='single_contact_info'>
                            <MediaButton isStatic={true} img={CiMail}/>
                             <ContactInfo 
                                title={contactEmail?.key}
                                info={contactEmail?.value}/>
                        </div>
                    </div>
                    <div className='responsive_sections'>
                        <FooterTItleWithSeparator title="Follow Us :"/> 
                        <div className='media_container'>
                        {mediaArray?.map((media: { id: number; image: string; link:string}) => (
                            <MediaButton key={media?.id} img={media?.image} link={media?.link} />
                        ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
