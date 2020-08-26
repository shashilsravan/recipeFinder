import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './Card'
function App() {
  const APP_ID = 'd491d5ca';
  const APP_KEY = "376e6f9fd4b388ea23286abbe142cd73"
  const [hits, setHits] = useState([]);
  const [title, setTitle] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [])
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setHits(data.hits)
    
  }
  console.log(hits)
  return (
    <div className="App mx-4 my-5">
      <h1>Recipe Finder</h1>
      <form className="form-group mx-sm-5 d-flex search-form"
        onSubmit={(e) => {
          e.preventDefault()
          getRecipes()
        }}>
        <input className="form-control search-bar"
         placeholder="Chicken ..." type="text"
         onChange={(e) => setTitle(e.target.value)} />
        <button className="btn ml-2 btn-primary search-btn" type="submit">
          Search
        </button>
      </form>
      <br />
      <div className="container">
          {hits.map((hit, index) => {
          return <Card key={index} recipe={hit} />
        })}
      </div>
    </div>
  );
}

export default App;
