import classes from "./Layout.module.css";
import { Menu } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

function Layout() {
  const items = [
    { label: "Маршрут 1", key: "1", icon: <EnvironmentOutlined /> },
    { label: "Маршрут 2", key: "2", icon: <EnvironmentOutlined /> },
    { label: "Маршрут 3", key: "3", icon: <EnvironmentOutlined /> },
  ];

  function selectionHandler(e) {
    console.log("click ", e);
  }

  return (
    <div className={classes.container}>
      <nav>
        <p>Выберите Ваш маршрут:</p>
        <Menu
          items={items}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          onClick={selectionHandler}
        />
      </nav>
      <main></main>
    </div>
  );
}

export default Layout;
