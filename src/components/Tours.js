import Card from "./Card";
import FilterButtons from "./FilterButtons";

function Tours({tours, removeTour, filter, onFilterChange}){
    return (
        <div className="container">
            <img src="aesthetic-wallpaper.jpg" className="background" alt="back" />
            <h2 className="title">Plan With Soman</h2>

            <FilterButtons filter={filter} onFilterChange={onFilterChange} />

            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;
