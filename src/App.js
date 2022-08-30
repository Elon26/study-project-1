import Main from "./components/main";
import HandleCard from "./components/handleCard";
import { Route, Switch } from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/handleCard" component={HandleCard} />
            </Switch>
        </>
    );
}

export default App;
