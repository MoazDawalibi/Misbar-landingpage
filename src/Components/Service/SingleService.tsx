import { BaseURL_IMAGE } from "../../api/config"
import { SingleServiceProps } from "../../type/app"

const SingleService = ({image,title,description}:SingleServiceProps) => {
  return (
    <div className='Single_Service'>
        <div className='icon_container'>
            <img src="/App/ServiceIconBg.png" alt="ServiceBg" />
            <span><img src={BaseURL_IMAGE + image} alt="" width={40} /></span>
        </div>

        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default SingleService