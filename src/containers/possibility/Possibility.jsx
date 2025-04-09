import React from 'react'
import "./possibility.css"
import possibility from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
        <div className='gpt3__possibilty-image'>
            <img src={possibility} alt='possibility' />
        </div>
        <div className='gpt3__possibility-content'>
          <h4>Request Early Access To Get Started</h4>
          <h1 className='gradient__text'>The possibilities are beyound your imagination</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias.</p>
          <h4>Request Early Access To Get Started</h4>
        </div>
    </div>
  )
}

export default Possibility