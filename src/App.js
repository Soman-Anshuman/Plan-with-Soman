import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tours from "./components/Tours";
import data from './data';

const App = () => {

  const [tours, setTours] = useState(data);
  const [filter, setFilter] = useState('all');

  function removeTour(id, name){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);

    toast.info(`You removed '${name}'`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    });
  }

  const handleFilterChange = (region) => {
    setFilter(region);
  };

  const filteredTours = filter === 'all' ? tours : tours.filter(tour => tour.region === filter);

  if(tours.length === 0){
    return(
      <div className="refresh">
        <img src="aesthetic-wallpaper.jpg" className="background" alt="back" />
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={filteredTours} removeTour={removeTour} filter={filter} onFilterChange={handleFilterChange}></Tours>
      <ToastContainer />
    </div>
  );
};

export default App;
