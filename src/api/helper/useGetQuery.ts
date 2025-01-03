import { useQuery } from 'react-query';
import useAxios from './useAxios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function useGetQuery(key: string, url: string , params?:any , options?:any) {
  const axios = useAxios();
  const navigate  = useNavigate()
  const {t , i18n} = useTranslation()
  
  return useQuery(
    params ? [key , params , i18n.language]  : [key , i18n.language], async () => {
  const response = await axios.get(url , {params});
    return response.data; 
  }, {
    onError: (error:any) => {
      if(error.response.status  == 401 || error.response.status == 403){
        toast.error(t('please_login_first'))
        navigate('/')
      }

      console.error('An error occurred:', error);
    },
    refetchOnWindowFocus: false,
    // cacheTime,
    ...options
    
  });
}

export default useGetQuery;
