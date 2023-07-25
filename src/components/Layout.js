import { useEffect } from "react";
import classes from "./Layout.module.css";
import Map from "./Map";
import Navigation from "./Navigation";
import data from "../data/data.json";
import { useDispatch } from "react-redux";
import { routerActions } from "../store/router-slice";

function Layout() {
  const dispatch = useDispatch();

  // подгружаем данные при первой загрузке
  // в реальном проекте данный код будет выполнятся асинхронно,
  // загрузка может быть реальзована через action creator function (thunk) в redux-toolkit
  useEffect(() => {
    dispatch(routerActions.updateRoutes(data));
  }, []);

  return (
    <div className={classes.container}>
      <Navigation />
      <Map />
    </div>
  );
}

export default Layout;
