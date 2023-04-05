import './App.css';
import Search from './search';
function App() {

  const handelOnSearchChange = (searchData) =>{
    console.log(searchData);
  }

  return (

      <div className="container">
        <h1>j</h1>
      <Search OnSearchChange={handelOnSearchChange}/>
    </div>
  );
}

export default App;
