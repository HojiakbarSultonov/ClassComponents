import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }

    }

    addPlyus = ()=>{
        this.setState({count:this.state.count+ 1})
        // this.setState((prevState)=>{count:prevState.count+ 1})
        // this.setState(({count:this.state.count+ 1}, ()=>console.log('Bir qoshildi')))
    }
    addMinus = ()=>{
        this.setState({count:this.state.count- 1})
    }
    render() {
        

        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.addPlyus}>Plyus</button>
                <button onClick={this.addMinus}>Minus</button>
            </div>
        );
    }
}

export default Counter;