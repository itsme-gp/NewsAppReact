import "./App.css";

import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  //c = " by pratik";
  pageSize = 6;
  apiKey=process.env.REACT_APP_NEWS_API

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          {/* Hello my first class based component {this.c} */}
          <NavBar />

          <LoadingBar color="#f11946" progress={this.state.progress} />

          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="g1"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>

            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>

            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>

            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>

            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>

            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>

            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>

            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
