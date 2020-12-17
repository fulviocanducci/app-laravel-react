import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Address from "./Address";
import Home from "./Home";
import ZipCode from "./ZipCode";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/zip-code">Busca de Cep</Link>
                        </li>
                        <li>
                            <Link to="/address">Busca de Endereço</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/zip-code">
                        <ZipCode />
                    </Route>
                    <Route path="/address">
                        <Address />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
