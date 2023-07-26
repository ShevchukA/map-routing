import "./Map.module.css";
import Track from "../Track/Track";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  const trackIsLoading = useSelector((store) => store.router.trackIsLoading);
  const position = [59.938955, 30.315644]; // Координаты начальной позиции карты

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {!trackIsLoading && <Track />}
    </MapContainer>
  );
}

export default Map;
