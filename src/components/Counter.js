import React, { Component } from "react";

class Counter extends Component {
  // constructor(props){
  //     super(props)
  //     this.state = {
  //         count:0
  //     }
  //     this.addPlyus = this.addPlyus.bind(this)

  // }

  state = {
    count: 0,
  };

  addPlyus = () => {
    this.setState({ count: this.state.count + 1 });
    // this.setState((prevState)=>{count:prevState.count+ 1})
    // this.setState(({count:this.state.count+ 1}, ()=>console.log('Bir qoshildi')))
  };
  addMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

//   addDeleteOne = (value)=>{
//     this.setState({count:value})
//   }
  Reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h1>Counter: {this.state.count}</h1>
                </div>
                <div className="card-body">
                  <button className="btn btn-success" onClick={this.addPlyus}>Plyus</button>
                  <button className="btn btn-primary m-2" onClick={this.Reset}>Reset</button>
                  <button className="btn btn-danger m-2" onClick={this.addMinus}>Minus</button>
                  {/* <button className="btn btn-danger m-2" onClick={()=>this.addDeleteOne(this.state.count + 1)}>ValPlus</button> */}
                  {/* <button className="btn btn-danger m-2" onClick={()=>this.addDeleteOne(this.state.count - 1)}>ValMinus</button> */}
                  {/* <button className="btn btn-danger m-2" onClick={()=>this.addDeleteOne(this.state.count = 0)}>ValReset</button> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
