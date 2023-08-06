export default async function fetchRoutes() {
  const response = await fetch(
    "https://api.npoint.io/a1d9abab6c190cee54c1" // массив данных по маршрутам, дублирует data.json в ./data
  );
  const data = await response.json();
  return data;
}
