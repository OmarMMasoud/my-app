import './App.css';
import search from './search';
function App() {

  const handelOnSearchChange = (searchData) =>{
    console.log(searchData);
  }
  
  return (

      <div className="container">
      <search OnSearchChange={handelOnSearchChange}/>
    </div>
  );
}

export default App;
