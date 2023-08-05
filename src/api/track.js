export default async function fetchTrack(points) {
  const trackPoints = points.join(";");

  const url = `https://trueway-directions2.p.rapidapi.com/FindDrivingRoute?stops=${trackPoints}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ad1fe90187msh5f3705307a9b274p107629jsnbdb8be07eb2c", // перенести в secure environment
      "X-RapidAPI-Host": "trueway-directions2.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  const result = await response.json();
  const waypoints = result.route.geometry.coordinates;
  return waypoints;
}
