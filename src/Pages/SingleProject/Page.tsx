import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import AnimationButton from "../../Components/Ui/AnimationButton";
import HeaderLink from "../../Components/Ui/HeaderLink";
import { BaseURL_IMAGE } from '../../api/config';
import Spinner from '../../Components/Utils/Loading/Spinner';
import ReactPlayer from 'react-player';
import { useFetchData } from '../../Hooks/useFetchData';

const SingleProjectPage = () => {
    const { id } = useParams<{ id: string }>();
  const { data, isLoading} = useFetchData('api/project');
  
  const [playing, setPlaying] = useState(false);
  const project = data?.find((p: { id: { toString: () => string | undefined; }; }) => p.id.toString() === id);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <div className='projects single_projects'>
      <div className="projects_container">
        <HeaderLink text="View Application" isMulti={true} extraLink="/projects" extraText="Projects" />
        <h1>{isLoading ? <Spinner /> : project?.title}</h1>

        <div className="video_section" id="video-section">
          <ReactPlayer onPlay={handlePlayPause} url={BaseURL_IMAGE + project?.video} playing={playing} controls={true} />
        </div>

        <div className='button_container'>
          <AnimationButton link='/contact' icon={<IoIosArrowDroprightCircle />} text="Contact Us Now" />
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
