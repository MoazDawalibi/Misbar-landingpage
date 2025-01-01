import Info from "../../Components/Info/Info"
import { useFetchData } from "../../Hooks/useFetchData";

const Page = () => {
  const { data, isLoading } = useFetchData('api/home');

  const privacyData = data?.Static_info[2];
  return (
    <Info
      headerText="Privacy Policy"
      title={privacyData?.key}
      response={privacyData?.value}
      isLoading={isLoading}
    />
  )
}

export default Page