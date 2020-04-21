import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };
  renderPage = () => {

    switch(this.state.currentPage){
      case "About":
        return <About />;

      case "Blog":
        return <Blog />;

      case "Home":
        return <Home />;

      case "Contact":
        return <Contact />;


    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />

        {this.renderPage()}

      </div>
    );
  }
}

export default PortfolioContainer;
