import { useRef, useState } from 'react';
import './App.css';
import ImageGarllery from './ImageGarllery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value)
    const endpointURL =
    `https://pixabay.com/api/?key=39636101-21e2cf0b6434684df51f7d3c0&q=${ref.current.value}&image_type=photo`
    fetch(endpointURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setFetchData(data.hits)
    })
  }

  return (
    <div className="container">
      <h2>my Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="search" ref={ref} />
    </form>
    <ImageGarllery fetchData={fetchData}/>
    </div>
  );
}

export default App;
