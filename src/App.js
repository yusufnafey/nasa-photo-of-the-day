import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Photo from './Components/Photo'
import Inputs from './Components/Inputs'

function App() {
  const [photo, setPhoto] = useState('')
  const [day, setDay] = useState('26')
    const [month, setMonth] = useState('12')
    const [year, setYear] = useState('2019')

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=EBsBvOHhsXP1n3sZ98Nc2Y5KmmCXizAP33lUxYEd&date=${year}-${month}-${day}`)
      .then(res => {
        console.log(res.data)
        setPhoto(res.data.url)
      })
  })

  return (
    <div className="App">
      <Inputs setDay={setDay} setMonth={setMonth} setYear={setYear} />
      <br />
      <Photo photo={photo} />
    </div>
  );
}

export default App;
