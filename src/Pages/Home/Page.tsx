import HeroSection from "../../Components/Home/HeroSection";
import Recent from "../../Components/Recent/Recent";
import Service from "../../Components/Service/Service";
import Works from "../../Components/Works/Works";
import About from "../../Components/about/About";
import Contact from "../../Components/contact/Contact";
import { useFetchData } from "../../Hooks/useFetchData";


const Page = () => {
  const { data, isLoading } = useFetchData('api/home');

  return (
    <>
      <HeroSection data={data} isLoading={isLoading} />
      <About isHaveHeader={false} data={data} isLoading={isLoading} />
      <Service data={data} isHaveHeader={false} isLoading={isLoading} />
      <Works data={data} isLoading={isLoading} />
      <Contact data={data} isHaveHeader={false} isLoading={isLoading} />
      <Recent data={data} isLoading={isLoading} />
    </>
  );
};

export default Page;
// footer -contact split 