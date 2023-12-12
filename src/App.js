import { useEffect, useState } from "react";
import "./App.css";
import Icons from "./components/icons.js";
import Reloj from "./components/reloj.js";

function App() {
  const [search, setSearch] = useState("Viña del Mar");
  const [values, setValues] = useState("");
  const [icon, setIcon] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const getData = async () => {
    await fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.cod >= 400) {
          setValues(false);
        } else {
          console.log(data);
          console.log(data.weather[0].main);
          setIcon(data.weather[0].main);
          setValues(data);
        }
        //console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      //console.log(e.target.value)
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <a class="active" href="#clima">
              Inicio
            </a>
          </li>
          <li>
            <a href="#clima">Clima</a>
          </li>
          <li>
            <a href="#reloj">Reloj</a>
          </li>
        </ul>
      </nav>

      <div className="contenedor" id="clima">
        <h2>Aplicación de Clima y Hora en React</h2>
        <div className="fila">
          <input onKeyDown={handleSearch} type="text" autoFocus />
        </div>
      </div>
      <div className="grid-container">
        <div className="card">
          {values ? (
            <div className="card-contenedor">
              <h1 className="nombre-ciudad">{values.name}</h1>
              <p className="temperatura">{values.main.temp.toFixed(0)}&deg;</p>
              <img className="icon" src={Icons(icon)} alt="icon-weather" />
              <div className="card-pie">
                <p className="temp-max-min">
                  {values.main.temp_min.toFixed(0)}&deg; |{" "}
                  {values.main.temp_max.toFixed(0)}&deg;
                </p>
              </div>
            </div>
          ) : (
            <h1>{"Ciudad no encontrada"}</h1>
          )}
        </div>
        <div id="reloj">
          <Reloj></Reloj>
        </div>
      </div>
    </>
  );
}

export default App;
