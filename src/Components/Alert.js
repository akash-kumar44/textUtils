import React from 'react'

export default function Alert(props) {
    //-----------Capitalize First Letter-----
  const capitalize = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1)
  }
    return (
        props.alert && 
        <div>
            <div className={`alert alert-${props.alert.type}`} role="alert" style= {{position: "absolute", right: "1px"}} >
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

