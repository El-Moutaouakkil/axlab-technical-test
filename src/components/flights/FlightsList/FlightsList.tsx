import { useEffect, useState } from "react";
import "./FlightsList.scss";
import { DataGrid, LoadPanel } from "devextreme-react";
import { Column, Scrolling, Selection } from "devextreme-react/cjs/data-grid";
import flightsData from "../../../mock-data/flights.json";
import { Flight } from "../../../types";
import { EventInfo } from "devextreme/events";
import dxDataGrid, { SelectionChangedInfo } from "devextreme/ui/data_grid";

type FlightsListProps = {
    onSelect:
        | ((
              e: EventInfo<dxDataGrid<Flight, any>> &
                  SelectionChangedInfo<Flight, any>
          ) => void)
        | undefined;
};

const FlightsList = ({ onSelect }: FlightsListProps) => {
    const [flights, setFlights] = useState<Flight[]>([]);

    useEffect(() => {
        // In a real application, you would fetch this data from an API
        setFlights(flightsData as Flight[]);
    }, []);

    const airlineRender = ({ data }: any) => (
        <div id='airline-container'>
            <div id='flightNumber-container'>
                <span id='title'>Flight - </span>
                <span id='number'> {data.flightNumber}</span>
                <span id='airline-icon-container'>
                    <i className='dx-icon-airplane' />
                </span>
            </div>
            <div id='airlineCode-container'>
                <span id='title'>Airline : </span>
                <span id='code'>{data.airlineCode}</span>
            </div>
        </div>
    );

    const flightScheduleRender = ({ data }: any) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        const date = new Date(data.flightDate);
        const formattedDate = date.toLocaleDateString("en-US", options);

        return (
            <div id='flight-schedule-container'>
                <div id='flightDate-container'>
                    <span id='title'>Departure date : </span>
                    <span id='date'>{formattedDate}</span>
                </div>
                <div id='origin-destination'>
                    <div id='origin-container'>
                        <div className='title'>Origin </div>
                        <div id='origin' className="location" >{data.origin}</div>
                    </div>
                    <span id='airline-icon-container'>
                        <i className='dx-icon-airplane' />
                    </span>
                    <div id='destination-container'>
                        <div className='title'>Destination </div>
                        <div id='destination' className="location" >{data.destination}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <DataGrid
                dataSource={flights}
                keyExpr='id'
                hoverStateEnabled={true}
                onSelectionChanged={onSelect}>
                <Selection mode='single' />
                <Scrolling mode='virtual' />
                <LoadPanel activeStateEnabled />
                <Column
                    dataField='airlineCode'
                    caption='Airline'
                    cellRender={airlineRender}
                />
                <Column
                    caption='Flight schedule'
                    // cellRender={({ data }) =>
                    //     ` ${data.flightDate} --- ${data.origin} -----> ${data.destination}`
                    // }
                    cellRender={flightScheduleRender}
                />
            </DataGrid>
        </div>
    );
};

export default FlightsList;
