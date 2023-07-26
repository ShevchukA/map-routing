import { useEffect } from "react";
import classes from "./Layout.module.css";
import Map from "./Map";
import Navigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes } from "../store/router-slice";

function Layout() {
  const dispatch = useDispatch();

  // подгружаем данные при первой загрузке
  useEffect(() => {
    dispatch(fetchRoutes());
  }, []);

  return (
    <div className={classes.container}>
      <Navigation />
      <Map />
    </div>
  );
}

export default Layout;
