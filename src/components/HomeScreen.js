import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Row from './Row'
import requests from '../Requests'
function HomeScreen() {
  return (
    <div>
       <Navbar />
       <Banner />
       <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row
        title="Action"
        fetchUrl={requests.fetchTrending}
        />
        <Row
        title="Comedy "
        fetchUrl={requests.fetchComedyMovies}
        />
        <Row
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        />
        <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        />
        <Row
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
        />
    </div>
  )
}

export default HomeScreen