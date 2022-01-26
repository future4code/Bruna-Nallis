import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminHomePage";
import AppForm from "./pages/ApplicationFormPage";
import CreateTrip from "./pages/CreateTripPage";
import ListTrip from "./pages/ListTripPage";
import LoginPage from "./pages/LoginPage";
import TripDetais from "./pages/TripDetailsPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";



function App() {
  
  return (
  
  
  <BrowserRouter>
  <Switch>
  
  <Route exact path={"/"}>
  <HomePage />
  </Route>

  <Route exact path={"/admin/trips/:id"}>
  <AdminPage/>
  </Route>
  
  <Route exact path={"/trips/application"}>
  <AppForm/>
  </Route>

  <Route exact path={"/admin/trips/create"}>
  <CreateTrip/>
  </Route>
  
  <Route exact path={"/trips/list"}>
  <ListTrip/>
  </Route>
  
  <Route exact path={"/login"}>
  <LoginPage/>
  </Route>

  <Route exact path={"/admin/trips/list"}>
  <TripDetais/>
  </Route>

  </Switch>
  
  </BrowserRouter>
  
  
  )
};

export default App;