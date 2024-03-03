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
    if (!data) return;
    setBooks([...books, data]);
  }, [data]);

  const renderBooks = () => {
    console.log(books);
    if (books.length == 0) return;
    return books.map((item) => {
      return <div>{item.title}</div>;
    });
  };

  return (
    <div className="container">
      <div className="greeting">hello</div>

      <InputForm fetchData={fetchData} />
      {
        //<WeatherItem description={'aaa'} />
        //<TempWeather />
      }
      <div>list{renderBooks()}</div>

      <button
        onClick={() => {
          fetchData(84);
        }}
      ></button>
    </div>
  );
}

export default App;
