import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Drawer } from "./contexts/drawer.context";
import { Sidebar } from "./contexts/sidebar.context";
import { ApplyFilter } from "./contexts/filterRest.context";

import ResponsiveDrawer from "./components/ResponsiveDrawer";
import Homepage from "./components/restaurant/Homepage";
import RestaurantDetails from "./components/restr-details/RestaurantDetails";
import PageNotFound from "./components/PageNotFound";

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

          <Route exact path="/page/soon" render={() => <PageNotFound />} />
          <Redirect to="/" />
        </Switch>
      </Sidebar>
    </div>
  );
}

export default App;
