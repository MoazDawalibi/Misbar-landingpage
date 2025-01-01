import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { HedaerLinksArray } from '../../data/HeaderLinks';
import DrawerLink from '../../Components/Ui/DrawerLink';
import { THeaderPage } from '../../type/app';
import { BaseURL_IMAGE } from '../../api/config';
import Spinner from '../../Components/Utils/Loading/Spinner';

const HeaderMenu = ({data, isLoading}:THeaderPage) => {
  const Logo = data?.Static_info[5]

  return (
    <div className='menu_nav'>
      <WithDrawer
        title=''
        button={<Button icon={<MenuOutlined />} type='primary' />}
      >
        {({ closeDrawer }) => (
          <>
            <div className='header_logo'>
            { isLoading ? <Spinner/> :
              <img src={BaseURL_IMAGE + Logo?.value} alt='Misbar Logo' width={65}/>
            }            
            </div>
            <ul className='DrawerLinks'>
              {HedaerLinksArray.map((drawerLink, index) => (
                <DrawerLink
                  isOnlyDrawer={drawerLink.isOnlyDrawer}
                  icon={<drawerLink.icon />}
                  key={index}
                  href={drawerLink.href}
                  name={drawerLink.name}
                  closeDrawer={closeDrawer}
                />
              ))}
            </ul>
          </>
        )}
      </WithDrawer>
    </div>
  );
}

export default HeaderMenu;
