// import { Marker, Popup } from 'leaflet';
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import Navbar from "../../Navbar/Navbar";

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-2xl">Our Location</h3>
            {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}
        </div>
    );
};

export default ContactUs;