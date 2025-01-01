import AnimationButton from "../Ui/AnimationButton";
import MediaButton from "../Ui/MediaButton";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Spinner from "../Utils/Loading/Spinner";
import { THeaderPage } from "../../type/app";

const HeroSection = ({data, isLoading}:THeaderPage) => {
  
  const {t} = useTranslation();  
  const mediaArray = data?.Social_media
  
  return (
    <div className='HeroSection'>
        <a href="#about">
          <img className="scroll_down_img" src="/Home/scrollDown.png" alt="scrollDown" />
        </a>
        <div className="media_section">
          <p>{t("Follow Us")}</p>
          <hr />
          <div className='media_container'>
              {
              isLoading ? <Spinner/> :
              mediaArray?.map((media: { id: number; image: string; link:string}) => (
                  <MediaButton key={media?.id} img={media?.image} link={media?.link} />
              ))}
          </div>
        </div>

        <div className="main_text_section">  
          <div className="Words">
            {/* <img src="/Home/HeroBorder.svg" alt="hero_image" /> */}
            <h1>{t("WE")}</h1>
            <h1>{t("DEVELOP")}</h1>
            <h1>{t("EDUCATION APPLICATIONS")}</h1>
          </div>
          <div className="bottom_text_container">
          <p className="bottom_text">{t("We develop a variety of parent follow-up apps for students that help parents keep track of their children's progress and homework schedules")}.</p>
          <div className="button_container">
            <AnimationButton link="/projects" icon={<IoIosArrowDroprightCircle/>} text="View Projects" />
          </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection