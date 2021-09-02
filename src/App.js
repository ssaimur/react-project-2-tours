import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tour, setTour] = useState([]);

  const removeTour = (value) =>{
    const newTour = tour.filter(item => item.id !== value);
    setTour(newTour);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTour(tours);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }

  }
  useEffect(() => {
    fetchTours();
  }, [])
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  if (tour.length === 0){
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tour={tour} remove={removeTour} />
    </main>
    )
}

export default App
