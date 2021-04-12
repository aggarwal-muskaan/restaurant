import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Drawer } from "./contexts/drawer.context";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/restaurant/Homepage";
import RestaurantDetails from "./components/restr-details/RestaurantDetails";

function App() {
  return (
    <div className="App">
      {/* fixed component */}
      <Sidebar />
      <Switch>
        {/* page will all restaurants */}
        <Route
          exact
          path="/"
          render={() => (
            <Drawer>
              <Homepage />
            </Drawer>
          )}
        />

        {/* details of specific restaurant and using its name as URL parameter */}
        <Route exact path="/:name" render={() => <RestaurantDetails />} />
      </Switch>
    </div>
  );
}

export default App;
