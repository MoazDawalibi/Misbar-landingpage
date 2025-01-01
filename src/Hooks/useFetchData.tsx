import { useQuery } from 'react-query';
import { BaseURL } from '../api/config';

const fetchData = async (fetchApi:any) => {
  const response = await fetch(`${BaseURL}${fetchApi}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useFetchData = (fetchApi:any) => {
    return useQuery(['data', fetchApi], () => fetchData(fetchApi), {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        cacheTime: Infinity,
      });
};
