
import './App.css';



var requestUrl = 'https://data.cityofnewyork.us/resource/w7w3-xahh.json?$limit=5'

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          this is text
        </p>
      
      </header>
    </div>
  );
}

export default App;
