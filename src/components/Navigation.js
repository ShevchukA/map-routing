import "./Navigation.module.css";
import { Menu } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrack, routerActions } from "../store/router-slice";
import { useEffect } from "react";

function Navigation() {
  const dispatch = useDispatch();
  const routes = useSelector((store) => store.router.routes);
  const routesIsLoading = useSelector((state) => state.router.routesIsLoading);
  const selectedRoute = useSelector((store) => store.router.selectedRoute);

  const items = routes.map((route, index) => {
    return { label: route.title, key: index, icon: <EnvironmentOutlined /> };
  });

  function selectionHandler(e) {
    dispatch(routerActions.selectRoute(Number(e.key)));
  }

  useEffect(() => {
    selectedRoute && dispatch(fetchTrack(selectedRoute.coordinates));
  }, [dispatch, selectedRoute]);

  return (
    <nav>
      <p>{`${
        routesIsLoading ? "Загружаем маршруты..." : "Выберите Ваш маршрут"
      }`}</p>
      <Menu
        items={items}
        defaultSelectedKeys={["0"]}
        mode="inline"
        theme="dark"
        onClick={selectionHandler}
      />
    </nav>
  );
}

export default Navigation;
