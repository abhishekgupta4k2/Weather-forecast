import './App.css';
import { useEffect } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/input';
import { useWeather } from './context/Weather';

function App() {
  const weather = useWeather();
  // console.log(weather);

  useEffect(() => {
    // Get current location
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick= {weather.fetchData} value = "Search" />
      <Card />
      {/* <Button value = "Refresh" /> */}
    </div>
  );
}

export default App;
