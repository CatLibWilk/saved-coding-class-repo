import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count -1 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>

        <div className="card-body">

          <p className="card-text">Click Count: {this.state.count}</p>

          <div class="row">

            <div class="col-12">

              <button className="btn btn-danger d-block col-2 mx-auto mb-5" onClick={this.handleIncrement}>
                Increment
              </button>

            </div>

            <div class="col-12">

              <button className="btn btn-danger d-block col-2 mx-auto" onClick={this.handleDecrement}>
                Decrement
              </button>

            </div>

          </div>
          
        </div>
        
      </div>
    );
  }
}

export default Counter;
