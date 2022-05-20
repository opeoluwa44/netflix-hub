import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import SubFooter from './Subfooter';
import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="Popular on Netflix" fetchUrl={requests.fetchActionMovies} addHeight/>
      <Row title="New Releases" fetchUrl={requests.fetchTopRated}/>
      <Row title="Children & Family Movies" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Action Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Adventures" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Young Adult Movies & Shows" fetchUrl={requests.fetchRomanticMovies}/>
      <Row title="Family Comedies" fetchUrl={requests.fetchComedyMovies}/>
      <SubFooter/>
     
    </div>
  );
}

export default App;
