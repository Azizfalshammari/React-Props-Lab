import React from 'react'
import Service from './Service'
import Programmer from './Programmer'
function Companies(props) {
  return (
    <>
    <h1>{props.companyName}</h1>
    <p>{props.worker}</p>
    <p>{props.found}</p>
    <Service
    service = {props.service}
    price = {props.price}
    />
    <div style={{display: 'flex'}}>
    <Programmer
    name  = {props.name1} 
    langs = {props.langs1}
    exp = {props.exp1}
    companyName = {props.companyName}   
   
    />
    <Programmer
    name  = {props.name2} 
    langs = {props.langs2}
    exp = {props.exp2}
    companyName = {props.companyName}   
   
    />
    <Programmer
    name  = {props.name3} 
    langs = {props.langs3}
    exp = {props.exp3}
    companyName = {props.companyName}   
    />

</div>
    </>
  )
}

export default Companies