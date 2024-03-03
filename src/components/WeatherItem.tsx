interface WIProps {
  description: string;
}

async function fetchData() {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=856881d3aa78c79db32fa7a2d6d7750b'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

const WeatherItem: React.FC<WIProps> = ({ description }) => {
  const url =
    'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=856881d3aa78c79db32fa7a2d6d7750b';

  fetchData()
    .then((data) => {
      if (data) {
        console.log('Fetched data:', data.entries);
      } else {
        console.log('Failed to fetch data.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return (
    <div className="wItem">
      {description}

      <div></div>
    </div>
  );
};
export default WeatherItem;

//ListItem: React.FC<ListItemProps>
