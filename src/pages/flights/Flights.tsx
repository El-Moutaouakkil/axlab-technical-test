import { useCallback, useState } from "react";
import FlightDetails from "../../components/flights/FlightDetails/FlightDetails";
import FlightsList from "../../components/flights/FlightsList/FlightsList";
import "./flights.scss";
import { DataGridTypes } from "devextreme-react/cjs/data-grid";

const Flights = () => {


    const [showFlightDetails, setShowFlightDetails] = useState(false);
    const [selectedFlightId, setSelectedFlightId] = useState<number | null>( null );

    const onSelectionChanged = useCallback(
        ({ selectedRowsData }: DataGridTypes.SelectionChangedEvent) => {
            const flight = selectedRowsData[0];

            setShowFlightDetails(!!flight);
            setSelectedFlightId(flight && flight.id);
        },
        []
    );

    // Note: in a real world app, we should probably save state into url params to allow direct linking to a specific flight details 
    // and to allow the user to refresh the page without losing the selected flight

    

    return (
        <div className='flights'>
            <div >
                <FlightsList onSelect={onSelectionChanged} />
            </div>
            <div className='flightDetails'>
                {showFlightDetails ? (
                    <FlightDetails flightId={selectedFlightId ?? 0} />
                ) : (
                    (selectedFlightId === 0 || !selectedFlightId) && (
                        <h5>Select a flight to show its details</h5>
                    )
                )}
            </div>
        </div>
    );
};

export default Flights;
