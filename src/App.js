import './App.css';
import Banner from './COMPONENTS/Banner';
import Row from './COMPONENTS/Row';
import requests from './request';
import Nav from './COMPONENTS/Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
      <Row title="NETFLIX TRENDING" fetchUrl={requests.fetchTrending}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
