import React,{useState} from 'react'
import axios from 'axios';

function App() {

const[data,setData]=useState({})
const[location,setLocation]=useState('')
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1b142f5d08c37a0a37bfe132532915df`


const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}


  return (
    <div className="App">
      <div className='search'>
        <input
        value={location}
        onChange={event=>setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Search'
        type='text'/>
      </div>
      <div className=''>
        <div className='top'>
           <div className='location'>
            <p>{data.name}</p>
           </div>
           <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
           </div>
           <div className='desc'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
           </div>
        </div>

      {data.name!=undefined&&
         <div className='bottom'>
         <div className='feels'>
           {data.main ? <p className='info'>{data.main.feels_like.toFixed()}°F</p> : null}
           <p>Feels Like</p>
         </div>
         <div className='humidity'>
         {data.main ? <p className='info'>{data.main.humidity}%</p> : null}
           <p>Humidity</p>
         </div>
         <div className='wind'>
         {data.main ? <p className='info'>{data.wind.speed.toFixed()}mph</p> : null}
           <p>Wind</p>
         </div>
       </div>
      }

       
      </div>
    </div>
  );
}

export default App;
