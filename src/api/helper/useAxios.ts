import axios from 'axios'
import { TOKEN_KEY } from '../../config/AppKey'
import { BaseURL } from '../config'
function useAxios() {

  return (
    axios.create({
        baseURL:BaseURL,
        headers:{
          Authorization:"Bearer " + localStorage.getItem(TOKEN_KEY),
          'language' : localStorage.getItem('language') 
        }
    })
  )
}

export default useAxios

