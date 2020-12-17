import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Address from "./Address";
import Home from "./Home";
import ZipCode from "./ZipCode";

function App() {
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Canducci ZipCode Package
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarCollapse"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/zipcode">
                                        Busca de Cep
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/address">
                                        Busca de Endereço
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="container">
                    <div className="bg-light p-1 rounded">
                        <Switch>
                            <Route path="/zipcode">
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
                </main>
            </Router>
        </>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
