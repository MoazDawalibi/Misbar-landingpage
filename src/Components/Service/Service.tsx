import CustomTitle from "../Ui/CustomTitle"
import SingleService from "./SingleService";
import HeaderLink from "../Ui/HeaderLink";
import Spinner from "../Utils/Loading/Spinner";
import { THeaderPage } from "../../type/app";

const Service = ({isHaveHeader = false, data,isLoading}:THeaderPage) => {

    const {t} = useTranslation();
    const serviceData = data?.Services

  return (
    <div className='Service'>
        <picture>
          <source className="service_image" srcSet="/App/WhiteBgRes.png" media="(max-width: 600px)" />
          <img className='service_image' src="/App/WhiteBg.png" alt="bg_image" />
        </picture>
        <div className="Title_link_container">
          {
            isHaveHeader ?  <HeaderLink text='Services' /> : ""
          }
          
        </div>
        <div className="service_top_container">
            <CustomTitle title="services" />
            <div className="title_container">
                <img src="/Logo/LogoText.png" alt="Logo" />
                <h1>{t("SERVICES")}</h1>
            </div>
            <p>{t("Services that we provide to you.")}</p>
        </div>

        <div className="service_bottom_container">
           {
           isLoading ? <Spinner/> :
           serviceData?.map((item: { id: number; image: string; title:string,description:string})=>(
            <SingleService 
            key={item?.id}
            image={item?.image}
            title={item?.title}
            description={item?.description}
            />
           ))}
        </div>
    </div>
  )
}

export default Service