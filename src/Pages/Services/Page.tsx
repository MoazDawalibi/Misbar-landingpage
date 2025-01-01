import Service from '../../Components/Service/Service'
import { useFetchData } from '../../Hooks/useFetchData';
import { useGetHome } from '../../api/home';

const Services = () => {
  const { data, isLoading } = useFetchData('api/home');

  return (
    <>
      <Service isLoading={isLoading} data={data} isHaveHeader={true} />
    </>
  )
}

export default Services