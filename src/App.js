import React ,{useState} from 'react'
import axios from 'axios'

function App() {

  const [data,setData]= useState({})
  const [location, setLocation] =useState({})
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4402a4ec91mshe4a245e5d87b4d6p12fb83jsn8713a60a30bb',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  

  const url =('https://weatherapi-com.p.rapidapi.com/current.json?q${location}', options)
  

  
  const searchLocation =(event) =>{
    if(event.key==="enter"){
      axios.get(url).then((Response) =>{
        setData(Response.data)
        console.log(Response.data)
      
      })
    }
  }
    return (

      <div className="App">
        <div className='search'>
        <input type="text"
        onKeyPress={(e) => searchLocation(e)}
        onChange={event=> setLocation(event.target.value)} 
        value= {location}
        placeholder='write city name'/>  
        </div>
        <div className='container'>

          <div className='top'>

            <div className='location'>
              <p>Dallas</p>
            </div>
            <div className='temp'>
              <h1>40°F</h1>              
            </div>
            <div className='description'>
              <p>clouds</p>
            </div>
          </div>

          <div className='bottom'>
            <div className='feels'>
             <p className='bold'> 65°F</p>
             <p>Feels Like</p>
            </div>
            <div className='humidity'>
             <p className='bold'>20%</p>
             <p>humidity</p>
            </div>
            <div className='wind'>
             <p>12 MPH</p>
             <p>Wind Speed</p>
            </div>
          </div>

        </div>

    </div>
  );
}

export default App;
