import { useContext, useEffect } from "react";
import "./App.css";
import { WeatherContext } from "./Context/WeatherContext";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Card from "./Components/Card";

function App() {
  const weather = useContext(WeatherContext);

  useEffect(() => {
    weather.fetchByLocation();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button title="Search" />
      <Card />
      <Button title="Refresh" />
    </div>
  );
}

export default App;
