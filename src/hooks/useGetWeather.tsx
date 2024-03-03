import { useState } from 'react';

interface ApiResponse {
  // Define the structure of the API response data
}
const useGetWeather = (): {
  data: ApiResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchData: (index: number) => void;
} => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (index: number) => {
    setIsLoading(true);
    console.log('asdf');
    const lat = 47;
    const long = -109;

    try {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=856881d3aa78c79db32fa7a2d6d7750b`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log('get data ', result.main.temp); //humidity
          console.log('get data ', result.weather[0].description); //humidity

          setData(result);
          //console.log(result);
          //console.log(result[0].main[0]);
        });
      //setData(response as ApiResponse);
    } catch (error) {
      console.log('errorrr');
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
