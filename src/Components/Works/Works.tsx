import CustomTitle from "../Ui/CustomTitle"
import WorksSwiper from "./WorksSwiper";

const Works = ({data, isLoading}:{data:any,isLoading:boolean}) => {
    const {t} = useTranslation();
    const worksData = data?.Works
    
  return (
    <div className='works'>

        <picture>
            <source className="works_image" srcSet="/Works/WorksBgRes.png" media="(max-width: 500px)" />
            <img className="works_image" src="/Works/Works.png" alt="MDN" />
        </picture>

        <div className="works_container">
            <div className="works_top">
                <CustomTitle title="project"/>
                <h1>{t("What")} <span>{t("OUR WORKS")}</span></h1>
                <p>{t("We design and develop professional educational applications that help parents follow their children's progress in study, track attendance and absence, and submit academic reports ")}</p>
            </div>

            <div className="swiper_container">
                <WorksSwiper isLoading={isLoading} data={worksData}/>    
            </div>            
        </div>
    </div>
  )
}

export default Works