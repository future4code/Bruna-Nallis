import {BrowserRouter, Switch, Route} from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <FeedPage/>
      </Route>

    <Route exact path="/login"> 
    <LoginPage/>
    </Route>

    <Route exact path="/register"> 
    <RegisterPage/> 
    </Route>
    
    <Route exact path="/post">
    <PostPage/> 
    </Route>
   
    <Header/>  
   
    </Switch>
    
    </BrowserRouter>

  );
}

export default App;
