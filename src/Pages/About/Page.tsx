import About from '../../Components/about/About'
import { useFetchData } from '../../Hooks/useFetchData';

const AboutUS = () => {
  const { data, isLoading } = useFetchData('api/home');

  return (
    <>
      <About data={data} isHaveHeader={true} isLoading={isLoading} />
    </>
  )
}

export default AboutUS