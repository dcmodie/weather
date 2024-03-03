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
    try {
      // Simulate an API call
      // Replace this with your actual fetch logic
      //https://gutendex.com/books/84/
      console.log('getting data w id:', index);
      const response = await fetch(`https://gutendex.com/books/${index}/`);
      if (!response.ok) {
        console.log('error');
        throw new Error('Network response was not ok');
      }
      const dataR = await response.json();
      console.log('success ', dataR);

      setData(dataR);
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
