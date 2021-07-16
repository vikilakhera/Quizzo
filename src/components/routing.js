import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Quiz from "./quiz";
import StartPage from "./startpage";
import ThanksPage from "./thanksPage";

function Routing(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={StartPage} />
                <Route path="/quiz/:id" exact component={Quiz} />
                <Route path="/end" exact component={ThanksPage} />
            </Switch>
        </Router>
    );
}

export default Routing;