import './App.css';
import WeatherItem from './components/WeatherItem';
import TempWeather from './components/TempWeather';
import { useGetWeather } from './hooks/useGetWeather';

function App() {
  const { data, fetchData } = useGetWeather(0);
  //console.log('webter ', weather);
  return (
    <div className="container">
      <div className="greeting">hello</div>
      {
        //<WeatherItem description={'aaa'} />
        //<TempWeather />
      }
      <div>{data?.entries?.length}</div>
      <button
        onClick={() => {
          fetchData(4, 5);
        }}
      ></button>
    </div>
  );
}

export default App;
