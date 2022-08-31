import Main from "./components/main";
import HandleCard from "./components/handleCard";
import { Route, Switch } from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
            <Switch>
                <Route path="/study-project-1/" exact component={Main} />
                <Route path="/study-project-1/handleCard" component={HandleCard} />
            </Switch>
        </>
    );
}

export default App;
