import './App.css';
import WeatherItem from './components/WeatherItem';
import TempWeather from './components/TempWeather';
import InputForm from './components/InputForm';
import { useGetWeather } from './hooks/useGetWeather';
import { useState, useEffect } from 'react';

function App() {
  const { data, fetchData } = useGetWeather({});
  const [value, setValue] = useState(0);
  const [books, setBooks] = useState([]);

  const [result, setResult] = useState([]);
  //const [books, setBooks] = useState([]);

  const handleInput = () => {
    fetchData(value);
  };

  useEffect(() => {
    /*
    ' if (!data) return;
    ' console.log('got weather data in App', data);
    ' //setBooks([...books, data]);
*/
  }, [data]);

  const renderBooks = () => {
    console.log(books);
    if (books.length == 0) return;
    return books.map((item) => {
      return <div>{item.title}</div>;
    });
  };

  const renderWeather = () => {
    // ' console.log('get data q', result.main.temp); //humidity
    // ' console.log('get data q', result.weather[0].description); //humidity

    if (data) {
      console.log(data);
      return (
        <div className="weatherReport">
          <div className="weatherReportCell">{data.name}</div>
          <div className="weatherReportCell">
            <div>Temerature</div>
            {data.main.temp}
          </div>
          <div className="weatherReportCell">
            <div>Humidity</div>
            {data.main.humidity}
          </div>
          <div className="weatherReportCell">
            <div>Description</div>
            {data.weather[0].description}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="greeting">hello</div>

      <InputForm fetchData={fetchData} />
      {
        //<WeatherItem description={'aaa'} />
        //<TempWeather />
      }
      <div>list{renderWeather()}</div>

      <button
        onClick={() => {
          fetchData(84);
        }}
      ></button>
    </div>
  );
}

export default App;
