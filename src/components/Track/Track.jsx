import { Polyline, Marker, Popup, useMap } from "react-leaflet";
import { calculateBounds } from "../../helpers/bounds-calculator";

function Track({ coordinates, waypoints }) {
  // Масштабирование карты по выбранному маршруту
  const bounds = calculateBounds([...coordinates]);
  const map = useMap();
  map.fitBounds(bounds);

  return (
    <>
      {/* Отображение точек */}
      {coordinates.map((position, index) => {
        return (
          <Marker key={index} position={position}>
            <Popup>{`Точка ${index + 1}: ${position}`}</Popup>
          </Marker>
        );
      })}
      {/* Отображение маршрута */}
      <Polyline positions={waypoints} color="blue" />;
    </>
  );
}

export default Track;
