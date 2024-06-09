import React from "react";
function Programmer(props) {
    let backgroundTuwaiq = props.companyName == 'Tuwaiq' ? 'purple' : 'white'
  return (
    <div style={{backgroundColor : backgroundTuwaiq}}>
      <h1>{props.name}</h1>
      <p>{props.langs}</p>
      <p>{props.exp}</p>
      <p>{props.companyName}</p>
    </div>
  );
}

export default Programmer;
