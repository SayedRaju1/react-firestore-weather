import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css';
import firebase from './firebase'
import WeatherInfoCard from './WeatherInfoCard';

function App() {
  const { register, handleSubmit } = useForm();
  const weatherInfoRef = firebase.firestore().collection("/weatherInfo");
  const [weatherInfo, setWeatherInfo] = useState([]);



  const onSubmit = data => {
    weatherInfoRef.add(data)
      .then(function (docRef) {
        console.log("Tutorial created with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding Tutorial: ", error);
      });;
    alert('Weather Info Added');
  };


  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("weatherInfo").get()
      setWeatherInfo(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1 className="text-white p-3 bg-dark">Weather Condition in Different Places</h1><br />



      <form className="border p-3 bg-light" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="p-3">Add City and Weather Condition Here</h3>
        <input className="p-2 m-2" placeholder="type city name" name="city" ref={register({ required: true })} />
        <input className="p-2 m-2" placeholder="type weather condition" name="condition" ref={register({ required: true })} /> <br />
        <input className="btn btn-success p-2 mt-2" type="submit" />
      </form><br /><br />
      <h3 className="p-2">City List and Weather Condition</h3>
      <ul>
        {
          weatherInfo.map(info => (
            <WeatherInfoCard
              info={info}
            ></WeatherInfoCard>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
