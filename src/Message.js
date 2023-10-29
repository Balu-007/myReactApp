import React from 'react'

const Message = (props) => {
  return (
    <div style={
        {
            "height":"100px",
            "width":"300px",
            "padding": "15px",
            "background-color":"coral",
            "box-shadow":"1px 2px"
        }}>
        <p>{props.msg}</p>
    </div>
  )
}

export default Message;