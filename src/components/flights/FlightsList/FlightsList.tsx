import { useEffect, useState } from "react";
// import "./flights.scss";
import { DataGrid } from "devextreme-react";
import { Column, Selection } from "devextreme-react/cjs/data-grid";
import flightsData from "../../../mock-data/flights.json";
import { Flight } from "../../../types";
import { EventInfo } from "devextreme/events";
import dxDataGrid, { SelectionChangedInfo } from "devextreme/ui/data_grid";

type FlightsListProps = {

    onSelect: | (( e: EventInfo<dxDataGrid<Flight, any>> & SelectionChangedInfo<Flight, any> ) => void) | undefined; };

const FlightsList = ({ onSelect }: FlightsListProps) => {
    const [flights, setFlights] = useState<Flight[]>([]);

    useEffect(() => {
        // In a real application, you would fetch this data from an API
        setFlights(flightsData as Flight[]);
    }, []);

    const airlineRender = ({ data }: any) => (
        <>
            <span className='from'>from</span>{" "}
            <span className='airlineCode'>{data.airlineCode}</span>{" "}
            <span className='through'>through </span>{" "}
            <span className='flightNumber'>{data.flightNumber}</span>
        </>
    );

    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <DataGrid
                dataSource={flights}
                keyExpr='id'
                hoverStateEnabled={true}
                onSelectionChanged={onSelect}>
                <Selection mode='single' />
                <Column
                    dataField='airlineCode'
                    caption='Airline'
                    cellRender={airlineRender}
                />
                <Column
                    caption='Flight schedule'
                    cellRender={({ data }) =>
                        ` ${data.flightDate} --- ${data.origin} -----> ${data.destination}`
                    }
                />
            </DataGrid>
        </div>
    );
};

export default FlightsList;
