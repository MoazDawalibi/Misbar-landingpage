import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';

const DrawerLink = ({href,name,icon,closeDrawer}:HedaerLinksProps) => {

    const {t} = useTranslation();
    const pathname = window.location.pathname;
    const is_active = pathname === href;
    const handleClick = () => {
      closeDrawer();
    };
  
  return (
    <NavLink to={href} className="nav_link_drawer" onClick={handleClick}>
      <p  className={`drawer_link ${is_active && "active_link" }`}>{icon}{t(name)} </p>
    </NavLink>
  )
}

export default DrawerLink