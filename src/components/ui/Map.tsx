"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icons in Next.js without needing leaflet-defaulticon-compatibility sometimes
import L from "leaflet";
const icon = "/marker-icon.png";
const iconShadow = "/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const position: [number, number] = [-31.5375, -68.5363]; // Approximate coordinates for San Juan

  return (
    <MapContainer 
      center={position} 
      zoom={14} 
      scrollWheelZoom={false} 
      className="w-full h-full rounded-[48px] z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div className="text-center font-sans">
            <h4 className="font-bold text-carbon text-sm">Deleite Fusión</h4>
            <p className="text-xs text-carbon/60 mt-1">Carlos Gardel 1122, Barrio B Stotac.</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
