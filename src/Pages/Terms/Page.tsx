import Info from "../../Components/Info/Info"
import { useFetchData } from "../../Hooks/useFetchData";

const Page = () => {
  const { data, isLoading } = useFetchData('api/home');

  const TermsData = data?.Static_info[1];
  return (
    <Info
      headerText="Terms & Conditions"
      title={TermsData?.key}
      response={TermsData?.value}
      isLoading={isLoading}
    />
  )
}

export default Page