import { useSelector } from "react-redux";
import "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";

function Map() {
  const selectedRoute = useSelector((store) => store.router.selectedRoute);

  useEffect(() => {}, []);

  const coordinates = selectedRoute && [...selectedRoute.coordinates];

  const position = [51.505, -0.09]; // Координаты начальной позиции карты

  return (
    <main>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedRoute &&
          coordinates.map((position, index) => {
            return (
              <Marker key={index} position={position}>
                <Popup>{`Точка ${index + 1}: ${position}`}</Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </main>
  );
}

export default Map;
