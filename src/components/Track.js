import { Polyline, Marker, Popup, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { calculateBounds } from "../helpers/bounds-calculator";

function Track(props) {
  // Масштабирование карты по выбранному маршруту
  const selectedRoute = useSelector((store) => store.router.selectedRoute);
  const bounds = calculateBounds([...selectedRoute.coordinates]);
  const map = useMap();
  map.fitBounds(bounds);

  // Массив координат точек маршрута
  const routePoints = selectedRoute && [...selectedRoute.coordinates];

  return (
    <>
      {/* Отображение точек */}
      {selectedRoute &&
        routePoints.map((position, index) => {
          return (
            <Marker key={index} position={position}>
              <Popup>{`Точка ${index + 1}: ${position}`}</Popup>
            </Marker>
          );
        })}
      {/* Отображение маршрута */}
      <Polyline positions={props.waypoints} color="blue" />;
    </>
  );
}

export default Track;
