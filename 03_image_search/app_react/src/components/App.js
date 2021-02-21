import React, {useState, useEffect} from 'react'
import ImageFinder from './ImageFinder';
import Card from './Card';

const key = process.env.REACT_APP_API_KEY
const url = `https://api.unsplash.com/search/photos?client_id=${key}`

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('sky');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${url}&query=${search}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setData(data.results)
      });
  }, [search])


  const getSearchInput = (ipt) => {
    console.log('handleSearch', input)
    setInput(ipt)
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log('handleClick', input)
    setSearch(input)
  }

  return (
    <div className="container">
      <div className="jumbotron mt-3 p-2 text-center bg-transparent">
        <h1 className="display-6 text-white">Image Finder</h1>
      </div>
      <ImageFinder searchInput={getSearchInput} onClick={handleClick} />

      <div className="card-columns">
        {data.map(item => {
            return <Card key={item.id} obj={item} />
          })
        }
      </div>
    </div>
  );
}

export default App;

