import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tours from "./components/Tours";
import data from './data';

const App = () => {

  const [tours, setTours] = useState(data);

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

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
      <ToastContainer />
    </div>
  );
};

export default App;
