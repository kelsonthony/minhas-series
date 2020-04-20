import React, { useState, useEffect } from 'react'
import Header from './Header'
import Genres from './Genres'
import NovoGenre from './NovoGenre'
import EditarGenre from './EditarGenre'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}


export default function App() {
  const [data, setData] = useState({})
  useEffect(() => {
      axios.get('/api').then(res => {
        setData(res.data)
      })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route path='/'exact component={Home} />
        <Route path='/generos/:id' exact component={EditarGenre} />
        <Route path='/genero/novo' exact component={NovoGenre} />
        <Route path='/generos' exact component={Genres} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}


