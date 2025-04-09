import React from 'react';
import "./whatgpt3.css";
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias. Delectus distinctio, culpa tenetur exercitationem sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum"/>
      </div>
      <div className='gpt3__whatgpt3-header'>
        <h1 className='gradient__text'>The possibilities are beyound your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias."/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias." />
        <Feature title="Eduation" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus distinctio, culpa tenetur exercitationem laborum alias."/>
      </div>
    </div>
  )
}

export default WhatGPT3