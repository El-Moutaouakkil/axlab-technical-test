import { DataGridTypes } from "devextreme-react/cjs/data-grid";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FlightDetails from "../../components/flights/FlightDetails/FlightDetails";
import FlightsList from "../../components/flights/FlightsList/FlightsList";
import "./flights.scss";

const Flights = () => {
    const [showFlightDetails, setShowFlightDetails] = useState(false);
    const [selectedFlightId, setSelectedFlightId] = useState<number | null>(
        null
    );

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");

    const onSelectionChanged = useCallback(
        ({ selectedRowsData }: DataGridTypes.SelectionChangedEvent) => {
            const flight = selectedRowsData[0];

            setShowFlightDetails(!!flight);
            setSelectedFlightId(flight && flight.id);
            setSearchParams({ id: flight && flight.id });
          
        },
        [setSearchParams]
    );

    useEffect(() => {
        if (id) {
            setSelectedFlightId(Number(id));
            setShowFlightDetails(true);
        }
    }, [id]);

    return (
        <div className='flights'>
            <div>
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
