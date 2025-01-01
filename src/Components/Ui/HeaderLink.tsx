import { useTranslation } from 'react-i18next';
import { SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { THeaderLink } from '../../type/app';
import { BaseURL } from '../../api/config';

const HeaderLink = ({text,isMulti,extraText,extraLink}:THeaderLink) => {
    const { t } = useTranslation();

  return (
    <div className='header_link'>
        <Link to={"/"} className='first_link'>{t("Home")}</Link>
        <SlArrowRight className='header_link_svg'/>
        {
            isMulti ?
            <>
                <Link to={`${extraLink}`} className='first_link'>{ t(extraText || "")}</Link>
                <SlArrowRight className='header_link_svg'/>
            </>
            : ""
        }
        <span className='page_title_link'>{t(text)}</span>
    </div>
  )
}

export default HeaderLink