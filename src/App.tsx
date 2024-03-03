import './App.css';
import WeatherItem from './components/WeatherItem';
import TempWeather from './components/TempWeather';
import InputForm from './components/InputForm';
import { useGetWeather } from './hooks/useGetWeather';
import { useState } from 'react';

function App() {
  const { data, fetchData } = useGetWeather(0);
  const [value, setValue] = useState(0);
  //const [count, setCount] = useState<number>(0);
  console.log('afsf', typeof setValue);

  const handleInput = () => {
    fetchData(value);
  };
  return (
    <div className="container">
      <div className="greeting">hello</div>

      <InputForm fetchData={fetchData} />
      {
        //<WeatherItem description={'aaa'} />
        //<TempWeather />
      }
      <div>{data?.id}</div>
      <button
        onClick={() => {
          fetchData(84);
        }}
      ></button>
    </div>
  );
}

export default App;
