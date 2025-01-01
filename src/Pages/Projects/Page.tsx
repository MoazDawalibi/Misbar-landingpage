import { IoIosArrowDroprightCircle } from "react-icons/io";
import AnimationButton from "../../Components/Ui/AnimationButton";
import HeaderLink from "../../Components/Ui/HeaderLink"
import ProjectCard from "../../Components/Projects/ProjectCard";
import Spinner from "../../Components/Utils/Loading/Spinner";
import { useFetchData } from "../../Hooks/useFetchData";

const Page = () => {
  const {t} = useTranslation();
  const { data, isLoading} = useFetchData('api/project');

  
  return (
    <div className="projects">
        <div className="projects_container">
          <HeaderLink text="Projects"/>        
          <h1>{t("Explore the premium apps we offer for you.")}</h1>

          <div className="single_project_container">
              {
                isLoading ? <Spinner/> :
                data?.map((item:any,index:number)=>(
                  <ProjectCard data={item} key={index}/>
                ))
              }
          </div>

          <div className='button_container'>
            <AnimationButton link='/' icon={<IoIosArrowDroprightCircle/>} text="View More" />
          </div>
        </div>
    </div>
  )
}

export default Page