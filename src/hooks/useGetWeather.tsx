import { useState } from 'react';

interface ApiResponse {
  // Define the structure of the API response data
}
const ufseGetWeather = () => {
  return [5, () => {}];
};

const useGetWeather = (): {
  data: ApiResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchData: (lat: number, lon: number) => void;
} => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (lat: number, lon: number) => {
    setIsLoading(true);
    try {
      // Simulate an API call
      // Replace this with your actual fetch logic

      console.log('getting data w lat and lon:', lat, lon);
      const response = await fetch('https://api.publicapis.org/entries');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const dataR = await response.json();
      console.log('success ', dataR);

      setData(dataR);
      //setData(response as ApiResponse);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};

export { useGetWeather };

// try {
//   const response = await fetch('https://api.publicapis.org/entries');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   const data = await response.json();
//   console.log('success ', data);

//   setWeatherData(lat);
// } catch (error) {
//   console.error('Error fetching data:', error);
//   // You can handle errors or throw them for the calling code to handle
//   throw error;
// }
