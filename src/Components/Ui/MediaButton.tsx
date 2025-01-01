import { BaseURL_IMAGE } from "../../api/config";

const MediaButton = ({  img:Image,link,isStatic }:any) => {
    
    return (
        <Link to={link}>
            <div className='MediaButton'>
                <span>{isStatic ? <span>{<Image/>}</span>:<img src={BaseURL_IMAGE + Image} alt="ak" width={14} />}</span>
            </div>
        </Link>
    );
};

export default MediaButton;
