import classes from "./Layout.module.css";
import Map from "../Map/Map";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRoutes } from "../../store/actions/actitionCreator";

function Layout() {
  const dispatch = useDispatch();

  // подгружаем данные при первой загрузке
  useEffect(() => {
    dispatch(getRoutes()); // вызываем экшен с типом GET_ROUTES
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Navigation />
      <Map />
    </div>
  );
}

export default Layout;
