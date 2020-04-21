import React, { Component } from 'react';
import API from "../utils/API";


class Discover extends Component {
    state = {
        currentDog: "",
        friendCount: 0
    }
    getDog(){

        API.search()
        .then(res => 
            this.setState({currentDog: res.data.message}))
        .catch(err => console.log(err));

    }

    clickHandler = (e) => {
        e.preventDefault();
        const choice = e.target.attributes.name.value;

        if(choice === "no"){
            this.getDog();
            return
        }else{

            const genNum = Math.floor(Math.random() * 6) + 1;
            if(genNum === 3){

                const countUpdate = this.state.friendCount + 1;
    
                this.setState({friendCount: countUpdate});
                this.getDog();

            }else{

                this.getDog();
            }
        }
    }
    
    componentDidMount() {
        this.getDog()
      }

    render(){
    return (
        <div className="col-4 justify-content-center mx-auto mt-5 text-center">
            <h2 className="mb-4">Meet some dog friends</h2>
            <div className="card">
                <img className="card-img-top" src={this.state.currentDog} alt="one of many dog"></img>
                <div className="card-body">
                    <h5 className="card-title">Like a dog why donchya</h5>

                    <div id="no" name="no" className="btn float-left" onClick={this.clickHandler}>No</div>
                    <div id="yes" name="yes" className="btn float-right" onClick={this.clickHandler}>Ye</div>
                </div>
                    <h1>{`You've made ${this.state.friendCount} dog friends so far!`}</h1>
            </div>
        </div>
    );
}
}
export default Discover;