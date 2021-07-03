
import './App.css';



var requestUrl = 'https://data.cityofnewyork.us/resource/w7w3-xahh.json?$limit=5'

fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  // giving each one of the array items an id 
  let i
  for (i = 0; i < data.length; i++) {
    const id = data[i];
    console.log(id)
    let idName = data[i].business_name_2;
    
    let address = data[i].address_street_name
    let state =  data[i].address_state;
    let zip = data[i].address_zip;
    let city = data[i].address_city;
    
    let idLoc = `${zip} ${address}`
    return data
  } 





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
  
  

  
});

// getting the video id of youtube videos from youtube api
function getData(requestUrl) {
 

};


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
