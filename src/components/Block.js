import React from "react"

// Components
import Button  from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';

import { MapContainer, TileLayer, Popup, Circle } from 'react-leaflet'

// Needed to make Leaflet marker component appear properly
import L from 'leaflet';
import axios from "axios";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Block = () => {
    const [filter, setFilter] = React.useState(["default"])
    const mapRef = React.useRef(null);

    // Default values
    const latitude = 40.1097
    const longitude = -88.2273
    const markerRadius = 30

    // Fetching data from backend
    const [markerData, setMarkerData] = React.useState([])
    const fetchData = () => {
        axios.get('http://127.0.0.1:8000/data',)
        .then(function (response) {
            setMarkerData(response.data)
            console.log(response.data)
        })
        .catch(function (error) {
            console.log("ERROR")
            console.log(error)
        })
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="block">
            <Card color="neutral" size="lg">
                <MapContainer center={[latitude, longitude]} zoom={15} ref={mapRef} className="map">
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markerData.map((data, idx) => {
                        return (
                            filter.map((option, _) => {
                                if (data[option] || filter.length === 1) {
                                    return (
                                        <Circle center={data.position} radius={markerRadius} key={idx}>
                                            <Popup>
                                                {data.description}
                                            </Popup>
                                        </Circle>
                                    )
                                }
                            })
                        )
                    })}
                </MapContainer>
            </Card>

            <Card color="neutral" size="lg" style={{display: "inline-flex"}}>
                <ToggleButtonGroup spacing={{ xs: 0, md: 1, lg: 3 }}
                    style={{backgroundColor: "rgba(252, 252, 254, 1)"}}
                    value={filter}
                    onChange={(event, newFilter) => {
                            setFilter(newFilter)
                    }}>
                    <Button value="hidden">Hidden</Button>
                    <Button value="filled">Filled</Button>
                    <Button value="signed">Signed</Button>
                </ToggleButtonGroup>
            </Card>
        </div>
    )
}

export default Block