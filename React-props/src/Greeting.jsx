import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h2>Good Morning {props.name}</h2>
      <h3>{props.name} Is {props.age} Year's Old</h3>
      <h3>{props.name} Is Very Good at:</h3>
      <ul>
        {props.items.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
