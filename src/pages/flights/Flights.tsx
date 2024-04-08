import FlightsList from "../../components/flights/FlightsList/FlightsList";
import "./flights.scss";


const Flights = () => {
  
    return (
        <div>
            <div style={{width:"40%", height:"20%"}} >
                <FlightsList onSelect={() => {}} />
            </div>
            {/* here should be the flight details view */}
        </div>
    );
};

export default Flights;


