import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/cjs/data-grid";
import { useEffect, useState } from "react";
import { Contingent } from "../../../types";
import contingentsData from "../../../mock-data/contignents.json";

type FlightDetailsProps = {
    flightId: number;
};

const FlightDetails = ({ flightId }: FlightDetailsProps) => {
    const [contingents, setContingents] = useState<Contingent[]>([]);

    useEffect(() => {
        const filteredContingents = contingentsData.filter(
            (c) => c.flightId === flightId
        );
        setContingents(filteredContingents);
    }, [flightId]);

    return (
        <>
            <DataGrid dataSource={contingents}>
                <Column dataField='clientCode' caption='Client Code' />
                <Column dataField='totalSeats' caption='Total Seats' />
                <Column dataField='bookedSeats' caption='Booked Seats' />
            </DataGrid>
        </>
    );
};

export default FlightDetails;
