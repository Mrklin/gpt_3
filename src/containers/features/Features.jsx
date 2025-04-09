import React from 'react'
import "./features.css"
import { Feature } from '../../components'

const Features = () => {

  const FeatureData = [
    {title: "Improving end distrst instantly",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias."
    },
    {title: "Become the tended active",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias."
    },
    {title: "Message or am nothing",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias."
    },
    {title: "Really boy law county",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias."
    }
  ]

  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>The Future Is Now And You Just Need To Realize It. Step Into The Future Today And Make It Happen</h1>
          <p>Request Early Access To Get Started</p>
      </div>
        <div className='gpt3__features-container'>
            {FeatureData.map((items, index)=> (
              <Feature  title={items.title} text={items.text} key={items.title + index}/>
            ))}
        </div>
    </div>
  )
}

export default Features