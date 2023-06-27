const API_TOKEN = import.meta.env.VITE_TOKEN;

const inputSearch = document.querySelector('#search-input');
const buttonSearch = document.querySelector('#search-button');

export const searchCities = async (term) => {
  const WEATHER_API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${API_TOKEN}&q=${term}`;
  const result = await fetch(WEATHER_API);
  const data = await result.json();
  data.length === 0 ? window.alert('Nenhuma cidade encontrada') : console.log(data);
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
