const API_TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const CITY_API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${API_TOKEN}&q=${term}`;
  const result = await fetch(CITY_API);
  const data = await result.json();
  return data.length === 0 ? window.alert('Nenhuma cidade encontrada') : data;
};

export const getWeatherByCity = async (cityURL) => {
  const WEATHER_API = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${API_TOKEN}&q=${cityURL}`;
  const result = await fetch(WEATHER_API);
  const data = await result.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
};
