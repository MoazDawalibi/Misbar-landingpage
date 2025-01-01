import { CustomTitleProps } from '../../type/app';


const CustomTitle = ({title}:CustomTitleProps) => {

  const {t} = useTranslation();

  return (
    <div className='Custom_Title'>
        <p>{t(title)}</p>
    </div>
  )
}

export default CustomTitle