import React, { Component } from "react";

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName:"Hojiakbar",
        dressName:'Futbolka',
        size: "XL",
        price:35000
    }
  }
  changeName = ()=>{
    this.setState({firstName:"Bobur", dressName:'Shalvar', size:"XX", price:45000})  
  }

  render() {
    return (
      <div>
        <h1>First name: {this.state.firstName}</h1>
        <h1> {this.state.dressName}</h1>
        <h1> {this.state.size}</h1>
        <h1> {this.state.price}</h1>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}
export default Class;
