import { BaseURL_IMAGE } from "../../api/config";
import AnimationButton from "../Ui/AnimationButton"
import PreviewButton from "../Ui/PreviewButton"

const ProjectCard = ({data}:any) => {
  
  const projectLink = `/single_project/${data?.id}`;

  return (
    <div className="project_card">
      <div className="project_card_container">
        <div className="images">
          <img className="main_img" src={BaseURL_IMAGE + data?.image} alt="" />
          <img className="hover_img" src={BaseURL_IMAGE + data?.hover_image} alt="" />
          <div className="buttons">
            <PreviewButton link={projectLink} />
            <AnimationButton text="Contact Us Now" link="/contact" withAnimation={false} />
          </div>
        </div>
      </div>

      <h1>{data?.title}</h1>
    </div>
  )
}

export default ProjectCard