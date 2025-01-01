import Contact from "../../Components/contact/Contact"
import { useFetchData } from "../../Hooks/useFetchData";

const Page = () => {
  const { data, isLoading } = useFetchData('api/home');

  return (
    <div className='contact_container'>
      <Contact isLoading={isLoading} data={data} isHaveHeader={true} />
    </div>
  )
}

export default Page