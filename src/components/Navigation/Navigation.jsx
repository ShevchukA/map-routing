import "./Navigation.module.css";
import { Menu } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectRoute } from "../../store/actions/actitionCreator";
import {
  selectRoutesLoadingStatus,
  selectRoutes,
  selectTrackLoadingStatus,
} from "../../store/selectors/selectors";

function Navigation() {
  const dispatch = useDispatch();
  const routes = useSelector(selectRoutes); // Список маршрутов
  const routesIsLoading = useSelector(selectRoutesLoadingStatus); // Состояние загрузки выбранного маршрута
  const trackIsLoading = useSelector(selectTrackLoadingStatus);

  // Маршруты для меню выбора
  const items = routes.map((route, index) => {
    return { label: route.title, key: index, icon: <EnvironmentOutlined /> };
  });

  // меняем информацию о выбранном маршруте
  function selectionHandler(e) {
    dispatch(selectRoute(Number(e.key)));
  }

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
      {trackIsLoading && <p>Загружаем маршрут...</p>}
    </nav>
  );
}

export default Navigation;
