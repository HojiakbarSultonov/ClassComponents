import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


// const firstName = 'Hojiakbar';
// const lastName = 'Sultonov';
// const user = {
//     fname:'Angela',
//     city:'California'
// }

// let num = 4;

// const numbers = [4,5,6]
// const color = 'blue'

// const cars = [
//     {carName:'Malibu', carPrice:30000},
//     {carName:'Gentra', carPrice:13000},
//     {carName:'Tracker', carPrice:25000},
//     {carName:'Cobalt', carPrice:9000},
//     {carName:'Spark', carPrice:7000},
//     {carName:'Captive', carPrice:27000},
// ]






ReactDOM.render(
    <div >
        {/* <p><b>Name:</b> {firstName}</p>
        <p><b>Last Name:</b> {lastName}</p> */}
        {/* <h2>Name: {user.fname}</h2>
        <h2>City: {user.city}</h2> */}
        {/* <p>{num * 10}</p> */}
        {/* <p>
            {numbers.map(number =>number + " ")}
        </p> */}
        {/* <h1 style={{color:'red', background:'yellow'}}>Welcome to our hub</h1>
        <p style={{color:color}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos laborum repellat fuga cumque perspiciatis laudantium.</p> */}
    {/*   <div className="container">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Car</th>
                                <th>Car Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                             cars.map((item, index)=>{
                                return ( 
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.carName}</td>
                                    <td>{item.carPrice}</td>
                                </tr>
                                );
                             })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
      </div> */}
        <App />
    </div>,


    document.getElementById('root'))