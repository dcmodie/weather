import { fetchWeatherApi } from 'openmeteo';

const TempWeather = () => {
  let weatherData;
  const tempGetWeather = async () => {
    const params = {
      latitude: 52.52,
      longitude: 13.41,
      hourly: 'temperature_2m',
      daily: [
        'weather_code',
        'temperature_2m_max',
        'temperature_2m_min',
        'showers_sum',
        'snowfall_sum',
      ],
    };
    const url = 'https://api.open-meteo.com/v1/forecast';
    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const hourly = response.hourly()!;
    const daily = response.daily()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    weatherData = {
      hourly: {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2m: hourly.variables(0)!.valuesArray()!,
      },
      daily: {
        time: range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        weatherCode: daily.variables(0)!.valuesArray()!,
        temperature2mMax: daily.variables(1)!.valuesArray()!,
        temperature2mMin: daily.variables(2)!.valuesArray()!,
        showersSum: daily.variables(3)!.valuesArray()!,
        snowfallSum: daily.variables(4)!.valuesArray()!,
      },
    };

    // `weatherData` now contains a simple structure with arrays for datetime and weather data

    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      console.log(
        weatherData.hourly.time[i].toISOString(),
        weatherData.hourly.temperature2m[i]
      );
    }
    console.log(weatherData.daily.temperature2mMax[0]);
    for (let i = 0; i < weatherData.daily.time.length; i++) {
      console.log(
        weatherData.daily.time[i].toISOString(),
        weatherData.daily.weatherCode[i],
        weatherData.daily.temperature2mMax[i],
        weatherData.daily.temperature2mMin[i],
        weatherData.daily.showersSum[i],
        weatherData.daily.snowfallSum[i]
      );
    }
  };
  tempGetWeather();
  console.log(weatherData?.daily.temperature2mMax[0]);
};
export default TempWeather;

//date hi lo rain snow
