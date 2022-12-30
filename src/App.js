import Row from './components/Row';
import './App.css';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <header className="App-header">
<Nav/>
      </header>
      <Banner  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row 
      isLargeRow={true}
      title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />



    </div>
  );
}

export default App;
