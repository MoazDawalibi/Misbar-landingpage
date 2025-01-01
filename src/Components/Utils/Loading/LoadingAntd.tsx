import { Spin } from 'antd';
import './Loading.scss'
import { useGetHome } from '../../../api/home';
import { BaseURL_IMAGE } from '../../../api/config';

const LoadingAntd = () => {
    const {data} = useGetHome();
    const Logo = data?.Static_info[5]
  return (
    <div className='loading_page'>
        <img src={BaseURL_IMAGE + Logo?.value} width={100} alt='logo'/>
        <Spin className='LoadingAntd' size='large' />
    </div>
  )
}

export default LoadingAntd