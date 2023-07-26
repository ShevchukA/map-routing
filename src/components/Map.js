import { useDispatch, useSelector } from "react-redux";
import "./Map.module.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect } from "react";
import { fetchTrack } from "../store/router-slice";
import Track from "./Track";

function Map() {
  const track = useSelector((store) => store.router.track);
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
      {track && <Track waypoints={track} />}
    </MapContainer>
  );
}

export default Map;
