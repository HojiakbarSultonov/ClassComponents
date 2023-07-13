import React from "react"

const Note = ()=>{
    return (
        <div className="note w-25 d-flex flex-column justify-content-center p-2 mt-5 rounded" style={{border:'1px solid',  }}>
          <h1>Title</h1>
          <p>Info</p>
      </div>
    )
}

export default Note