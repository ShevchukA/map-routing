import classes from "./Layout.module.css";
import Map from "./Map";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div className={classes.container}>
      <Navigation />
      <Map />
    </div>
  );
}

export default Layout;
