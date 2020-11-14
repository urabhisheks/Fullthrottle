import React, { Component } from "react";
import TextArea from "./TextArea";
import classes from "./Body.module.css";
import { ToastContainer, toast } from "react-toastify";
class Body extends Component {
  state = {
    labels: [
      "Examination",
      "Clinical History",
      "Technique",
      "Findings",
      "Impressions",
    ],
    filled: [],
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name ", name, " value ", value);
    this.setState({ [name.toLowerCase().replace(/ +/g, "")]: value });
  };
  notify = () =>
    toast.success("Your report has been successfully submitted!!!");
  handleSelected = (e) => {
    const { name } = e.target;
    this.setState({ selected: name.toLowerCase().replace(/ +/g, "") });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.labels.map((label) => {
      console.log(
        `${label} -- ${this.state[label.toLowerCase().replace(/ +/g, "")]}`
      );
      this.setState({ filled: [] });
    });
    this.notify();
  };
  handleComplete = (value) => {
    this.setState({ filled: [...this.state.filled, value] });
  };
  render() {
    console.log("state ", this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={classes.body}>
          <TextArea
            labels={this.state.labels}
            onChange={this.handleChange}
            onClick={this.handleSelected}
            selected={this.state.selected}
            last={this.state.labels.length}
            filled={this.state.filled}
            complete={this.handleComplete}
          />
          <div>
            <button className={classes.submit}>Submit</button>
            <ToastContainer hideProgressBar={true} autoClose={3000} />
          </div>
        </div>
      </form>
    );
  }
}

export default Body;
