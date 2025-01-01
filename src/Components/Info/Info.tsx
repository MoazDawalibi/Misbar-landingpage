import HeaderLink from '../Ui/HeaderLink'
import { InfoProps } from '../../type/InfoProps';
import Spinner from '../Utils/Loading/Spinner';

const Info = ({headerText,title,response,isLoading}:InfoProps) => {
  const {t} = useTranslation();
  
  return (
    <div className='info'>

      <picture>
          <source className="info_image" srcSet="/App/WhiteBgRes.png" media="(max-width: 600px)" />
          <img className="info_image" src="/App/WhiteBg.png" alt="MDN" />
      </picture>

        {isLoading? <Spinner/> :
        <div className="info_content">
          <HeaderLink text={headerText}/>
          <h1>{t(title)}</h1>
          <p>{response}</p>
        </div>
        }
    </div>
  )
}

export default Info