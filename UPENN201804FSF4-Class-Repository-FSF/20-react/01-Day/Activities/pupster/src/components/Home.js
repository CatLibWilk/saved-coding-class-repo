import React, { Component } from 'react';
import TextBox from "./TextBox"
import {BrowserRouter as Router, Route} from "react-router-dom";


const Home = (props) => (
    <div className="container-fluid">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Pupster</h1>
                <p class="lead">Meet some pups, dog.</p>
            </div>
        </div>
        <div class="row justify-content-center pt-4">
        <TextBox />
        </div>
    </div>
)

export default Home;