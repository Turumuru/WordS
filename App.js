import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Definition from "./components/Definition";
import Synonyms from "./components/Synonyms";
import Antonyms from "./components/Antonyms";
import Examples from "./components/Examples";
import Rhymes from "./components/Rhymes";
import Pronunciation from "./components/Pronunciation";
import Syllables from "./components/Syllables";
import NotFound from "./components/NotFound";

class App extends React.Component {

    render() {
        return (
            <div>
                <main>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/Definition" component={Definition}/>
                            <Route exact path="/Synonyms" component={Synonyms}/>
                            <Route exact path="/Antonyms" component={Antonyms}/>
                            <Route exact path="/Examples" component={Examples}/>
                            <Route exact path="/Rhymes" component={Rhymes}/>
                            <Route exact path="/Pronunciation" component={Pronunciation}/>
                            <Route exact path="/Syllables" component={Syllables}/>
                            <Route exact path="*" component={NotFound}/>
                        </Switch>
                    </BrowserRouter>
                </main>
            </div>
        );
    }
}


export default App;
