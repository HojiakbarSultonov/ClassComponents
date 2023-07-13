import React from "react"

const Footer = ()=>{
  
  const date = new Date();
  const year = date.getFullYear()

    return (
        <div className="footer">
        <h5 className="text-center">&copy; Copyrights Reserved: {year} </h5>
      </div>

    )}

    export default Footer