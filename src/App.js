// import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Drawer } from "./contexts/drawer.context";
import { Sidebar } from "./contexts/sidebar.context";
import { ApplyFilter } from "./contexts/filterRest.context";

import ResponsiveDrawer from "./components/ResponsiveDrawer";
import Homepage from "./components/restaurant/Homepage";
import RestaurantDetails from "./components/restr-details/RestaurantDetails";

function App() {
  return (
    <div className="App">
      {/* fixed component */}
      <Sidebar>
        <ResponsiveDrawer />
        <Switch>
          {/* page will all restaurants */}
          <Route
            exact
            path="/"
            render={() => (
              <ApplyFilter>
                <Drawer>
                  <Homepage />
                </Drawer>
              </ApplyFilter>
            )}
          />

          {/* details of specific restaurant and using its name as URL parameter */}
          <Route exact path="/:restrId" render={() => <RestaurantDetails />} />
          <Redirect to="/" />
        </Switch>
      </Sidebar>
    </div>
  );
}

export default App;
