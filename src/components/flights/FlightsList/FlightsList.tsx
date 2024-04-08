import { useEffect, useState } from "react";
// import "./flights.scss";
import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/cjs/data-grid";
import flightsData from "../../../mock-data/flights.json";
import { Flight } from "../../../types";

type FlightsListProps = {
    onSelect: (flightId: number) => void;
};

const FlightsList = ({ onSelect }: FlightsListProps) => {
    const [flights, setFlights] = useState<Flight[]>([]);

    useEffect(() => {
        // In a real application, you would fetch this data from an API
        setFlights(flightsData as Flight[]);
    }, []);

    return (
        <DataGrid
            dataSource={flights}
            keyExpr='id'
            onSelectionChanged={(e) => {
                if (e.selectedRowsData[0]) {
                    onSelect(e.selectedRowsData[0].id);
                }
            }}>
            <Column
                dataField='airlineCode'
                caption='Airline'
                cellRender={({ data }) =>
                    `From ${data.airlineCode} To ${data.flightNumber}`
                }
            />
            {/* <Column dataField='flightDate' caption='Date' /> */}
            <Column
                caption='Flight schedule'
                cellRender={({ data }) =>
                    ` ${data.flightDate} --- ${data.origin} -----> ${data.destination}`
                }
            />
        </DataGrid>
    );
};

export default FlightsList;
