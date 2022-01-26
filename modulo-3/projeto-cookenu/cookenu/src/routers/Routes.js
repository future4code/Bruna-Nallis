import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "../components/Header/Header";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import ErroPage from "../pages/ErroPage/ErroPage";
import Login from "../pages/LoginPage/LoginPage";
import RecipesDetailPage from "../pages/RecipesDetailPage/RecipesDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SingUp from "../pages/SingUpPage/SingUpPage";

export default function Router() {

return (

    <BrowserRouter>

    <Header/>

    <Switch>

    <Route exact path='/login'>
    <Login/>
    </Route>

    <Route exact path='/adicionar-receita'>
    <AddRecipesPage/>
    </Route>

    <Route exact path='/'>
    <RecipesListPage/>
    </Route>

    <Route exact path='/detalhe/:id'>
    <RecipesDetailPage/>
    </Route>

    <Route exact path='/cadastro'>
    <SingUp/>
    </Route>

    <Route>
    <ErroPage/>
    </Route>

    </Switch>

    </BrowserRouter>
);

};