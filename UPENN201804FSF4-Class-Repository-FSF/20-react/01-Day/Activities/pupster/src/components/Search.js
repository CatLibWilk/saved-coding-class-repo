import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import API from "../utils/API";
import Dog from "./Dog"

class Search extends Component{
    state = {
        query: "",
        dogPound: []
    }
    queryBuild = e => {
        const queryUpdate = e.target.value;    
        this.setState({query: queryUpdate})

    }

    runSearch = () => {
        const dogArray = [];
        console.log("sarch ran")
        API.search(this.state.query)
        .then(res => 
            {
                console.log(res);

                res.data.message.map(url => {
                    dogArray.push(url);
                })
                console.log(dogArray)
                this.setState({dogPound: dogArray})
            }
        )
        .catch()
        console.log(this.state.dogPound)
            // res.data.message))
    }

    render(){
        return(
            <div className="col-10 justify-content-center">
                
                <div className="input-group mt-5 mb-5 mx-auto">
                    <input type="text" className="form-control" placeholder="search by breed" aria-label="search by breed" aria-describedby="button-addon2" onChange={this.queryBuild}></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.runSearch}>Search</button>
                    </div>
                </div>

                <div id="dog-images">
                    <div class="col-10 mx-auto">               
                        {this.state.dogPound.map(url => {
                            return <Dog src={url}/>
                        })}
                    </div>
                        
                </div>
            </div>    
        )
    }
}
export default Search;