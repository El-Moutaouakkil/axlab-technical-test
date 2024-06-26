import { DataGridTypes } from "devextreme-react/cjs/data-grid";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FlightDetails from "../../components/flights/FlightDetails/FlightDetails";
import FlightsList from "../../components/flights/FlightsList/FlightsList";
import "./flights.scss";

const Flights = () => {
    const [selectedFlightId, setSelectedFlightId] = useState<number>();

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");

    const onSelectionChanged = useCallback(
        ({ selectedRowsData }: DataGridTypes.SelectionChangedEvent) => {
            const flight = selectedRowsData[0];

            setSelectedFlightId(flight && flight.id);
            setSearchParams({ id: flight && flight.id });
        },
        [setSearchParams]
    );

    useEffect(() => {
        if (id) {
            setSelectedFlightId(Number(id));
        }
    }, [id]);

    return (
        <div className='flights'>
            <div className='flights-list'>
                <FlightsList onSelect={onSelectionChanged} />
            </div>
            <div className='flight-details'>
                {selectedFlightId ? (
                    <FlightDetails flightId={selectedFlightId} />
                ) : (
                    <h5>Select a flight to show its details</h5>
                )}
            </div>
        </div>
    );
};

export default Flights;
