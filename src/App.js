
import './App.css';
import Row from './Row';
import Requests from './Requests'
function App() {
  return (
    <div className="App">

        <Row title="NETFLIX ORIGNAL" fetchUrl={Requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl={Requests.fetchTrending}/>  

    </div>
  );
}

export default App;
